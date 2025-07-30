
const dataMotor = {
  Zapq1: [
    {tanggal: '2024-01-10', kerusakan: 'Ganti Oli', biaya: 'Rp 60.000', mekanik: 'Pak Budi'},
    {tanggal: '2024-03-12', kerusakan: 'Ganti Busi', biaya: 'Rp 25.000', mekanik: 'Pak Roni'}
  ],
  Yua2: [
    {tanggal: '2024-02-02', kerusakan: 'Servis Karburator', biaya: 'Rp 80.000', mekanik: 'Pak Dwi'}
  ],
  Xrt99: [
    {tanggal: '2024-04-15', kerusakan: 'Ganti Ban Depan', biaya: 'Rp 120.000', mekanik: 'Pak Wahyu'}
  ],
  Rmz3: [
    {tanggal: '2024-05-20', kerusakan: 'Servis Lengkap', biaya: 'Rp 200.000', mekanik: 'Pak Toni'}
  ]
};

function openTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function cekRiwayat() {
  const kode = document.getElementById('kodeMotor').value.trim();
  const hasil = document.getElementById('hasilRiwayat');
  hasil.innerHTML = '';

  if (dataMotor[kode]) {
    dataMotor[kode].forEach(entry => {
      hasil.innerHTML += `
        <div class="card">
          <h3>${kode.toUpperCase()}</h3>
          <div class="info">Tanggal: ${entry.tanggal}</div>
          <div class="info">Kerusakan: ${entry.kerusakan}</div>
          <div class="info">Biaya: ${entry.biaya}</div>
          <div class="info">Mekanik: ${entry.mekanik}</div>
        </div>
      `;
    });
  } else {
    hasil.innerHTML = '<p>Kode motor tidak ditemukan.</p>';
  }
}

setTimeout(() => {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('tabMenu').style.display = 'flex';
  const buttons = document.querySelectorAll('.tab-menu button');
  buttons.forEach((btn, i) => {
    setTimeout(() => btn.style.opacity = 1, i * 300);
  });
}, 3000);
