const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // limpa mensagens anteriores
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  let ok = true;

  // valida email
  const emailVal = email.value.trim();
  if (!emailVal) {
    email.nextElementSibling.textContent = 'O email é obrigatório';
    ok = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    email.nextElementSibling.textContent = 'Formato de email inválido';
    ok = false;
  }

  // valida senha (aqui só obriga não vazio; ajuste se quiser regra de força)
  if (!password.value.trim()) {
    password.nextElementSibling.textContent = 'A senha é obrigatória';
    ok = false;
  }

  // se válido, "simula login" e redireciona
  if (ok) {
    // exemplo: poderíamos guardar um flag simples
    localStorage.setItem('auth', 'ok');
    window.location.href = './dashboard.html';
  }
});
