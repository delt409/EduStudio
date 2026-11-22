(() => {
  const today = document.getElementById('visitor-today');
  const total = document.getElementById('visitor-total');
  const status = document.getElementById('visitor-status');
  if (!today || !total || !status) return;
  fetch('/api/visitors', { method: 'GET', cache: 'no-store', headers: { 'Accept': 'application/json' } })
    .then(async response => { if (!response.ok) throw new Error('HTTP ' + response.status); return response.json(); })
    .then(data => {
      today.textContent = Number(data.today || 0).toLocaleString('id-ID');
      total.textContent = Number(data.total || 0).toLocaleString('id-ID');
      // update footer stats if present
      const ftToday = document.getElementById('footer-visitor-today');
      const ftTotal = document.getElementById('footer-visitor-total');
      if (ftToday) ftToday.textContent = Number(data.today || 0).toLocaleString('id-ID');
      if (ftTotal) ftTotal.textContent = Number(data.total || 0).toLocaleString('id-ID');
      status.textContent = 'Dihitung berdasarkan IP unik per hari (WITA). Alamat IP asli tidak disimpan.';
    })
    .catch(() => { status.textContent = 'Statistik belum tersedia. Deploy ke Vercel dan konfigurasi Upstash Redis sesuai README.'; });
})();
