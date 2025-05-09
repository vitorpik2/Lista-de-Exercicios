function sacar() {
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    const notas = [100, 50, 10, 1];
    notas.forEach(nota => {
      let qtd = Math.floor(valor / nota);
      if (qtd > 0) {
        resultado.innerHTML += `Notas de R$${nota}: ${qtd}<br>`;
        valor %= nota;
      }
    });
  }
  