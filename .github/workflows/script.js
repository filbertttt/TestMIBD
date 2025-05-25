function nextScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => screen.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function validateLogin() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  if (!email.includes('@')) {
    alert("Email harus mengandung '@'");
    return;
  }

  if (pass.length < 6) {
    alert("Password harus minimal 6 karakter");
    return;
  }

  nextScreen('phone-screen');
}

function sendOTP() {
  const phone = document.getElementById('phone').value;
  if (!/^\d+$/.test(phone)) {
    alert("Nomor HP hanya boleh angka");
    return;
  }
  document.getElementById('shown-phone').innerText = phone;
  nextScreen('otp-screen');
}

function verifyOTP() {
  const inputs = document.querySelectorAll('.otp');
  let code = '';
  inputs.forEach(input => code += input.value);

  if (!/^\d{4}$/.test(code)) {
    alert("Kode OTP harus 4 digit angka");
    return;
  }

  nextScreen('verified-screen');
}

function socialLogin(provider) {
  alert(`Simulasi login dengan ${provider}. Menampilkan akun pengguna...`);
}
