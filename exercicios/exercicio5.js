function verificarIdade() {
    const ano = parseInt(document.getElementById('anoNascimento').value);
    const atual = new Date().getFullYear();
    const resultado = document.getElementById('resultado');
  
    if (isNaN(ano) || ano > atual) {
      resultado.textContent = "Insira um ano válido.";
      return;
    }
  
    const idade = atual - ano;
    let status = idade < 18 ? "Menor de idade" :
                 idade < 60 ? "Adulto" : "Idoso";
  
    resultado.textContent = `Idade: ${idade} anos - ${status}`;
  }
  