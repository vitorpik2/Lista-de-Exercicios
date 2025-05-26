function contar() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const passo = parseInt(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
      resultado.textContent = "Por favor, preencha todos os campos com valores válidos.";
      return;
    }
  
    let contagem = '';
    if (inicio < fim) {
      for (let i = inicio; i <= fim; i += passo) {
        contagem += `${i} 👉 `;
      }
    } else {
      for (let i = inicio; i >= fim; i -= passo) {
        contagem += `${i} 👉 `;
      }
    }
  
    resultado.textContent = contagem + "🏁";
  }
  
  function retornar() {
  window.history.back()
}