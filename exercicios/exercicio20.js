function calcularMedia() {
    const entrada = document.getElementById('notas').value;
    const notas = entrada.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    const resultado = document.getElementById('resultado');
  
    if (notas.length < 3) {
      resultado.textContent = 'Digite pelo menos 3 notas válidas.';
      return;
    }
  
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    let status = '';
  
    if (media >= 7) status = 'Aprovado';
    else if (media >= 5) status = 'Recuperação';
    else status = 'Reprovado';
  
    resultado.textContent = `Média: ${media.toFixed(2)} - ${status}`;
  }
  