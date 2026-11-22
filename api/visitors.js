const crypto = require('node:crypto');

const reply = (res, status, payload) => res.status(status).json(payload);
async function redis(command, url, token) {
  const r = await fetch(url.replace(/\/$/, ''), {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    signal: AbortSignal.timeout(7000)
  });
  if (!r.ok) throw new Error(`Redis HTTP ${r.status}`);
  const body = await r.json();
  if (body.error) throw new Error('Redis command failed');
  return body.result;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return reply(res, 405, {error:'Method not allowed'}); }
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const secret = process.env.VISITOR_HASH_SECRET;
  if (!url || !token || !secret) return reply(res, 503, {error:'Visitor counter belum dikonfigurasi'});
  // Trust the client IP header provided by Vercel. Do not accept an IP from query/body.
  const raw = req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || '';
  const ip = (Array.isArray(raw) ? raw[0] : String(raw).split(',')[0]).trim();
  if (!ip) return reply(res, 503, {error:'IP pengunjung tidak tersedia'});
  const parts = new Intl.DateTimeFormat('en-US', {timeZone:'Asia/Makassar', year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const field = type => parts.find(p => p.type === type).value;
  const date = `${field('year')}-${field('month')}-${field('day')}`;
  const hash = crypto.createHmac('sha256', secret).update(`${date}|${ip}`).digest('hex');
  const prefix = 'edustudio:visitors';
  const daily = `${prefix}:daily:${date}`;
  const totalKey = `${prefix}:total`;
  const visitorKey = `${prefix}:seen:${date}:${hash}`;
  try {
    // Single atomic Lua command: deduplicate per IP/day and increment both counters.
    const script = `local fresh=redis.call('SET',KEYS[1],'1','EX',172800,'NX')\nif fresh then redis.call('INCR',KEYS[2]); redis.call('INCR',KEYS[3]) end\nreturn {tonumber(redis.call('GET',KEYS[2]) or '0'),tonumber(redis.call('GET',KEYS[3]) or '0')}`;
    const result = await redis(['EVAL', script, '3', visitorKey, daily, totalKey], url, token);
    return reply(res, 200, {today: Number(result[0] || 0), total: Number(result[1] || 0), date});
  } catch (e) {
    console.error('Visitor statistics unavailable:', e.message);
    return reply(res, 502, {error:'Statistik pengunjung belum dapat dimuat'});
  }
};
