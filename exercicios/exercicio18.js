function validar() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const resultado = document.getElementById('resultado');
  
    if (!nome || !email || !senha) {
      resultado.textContent = 'Preencha todos os campos!';
      return;
    }
  
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      resultado.textContent = 'E-mail inválido!';
      return;
    }
  
    resultado.textContent = 'Cadastro realizado com sucesso!';
  }
  