function gerarSenha() {
    const tamanho = Number(document.getElementById('tamanho').value);
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      const rand = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[rand];
    }
    document.getElementById('senha').textContent = senha;
  }
  