function sortear() {
    const min = Number(document.getElementById('min').value);
    const max = Number(document.getElementById('max').value);
    if (min >= max) {
      document.getElementById('resultado').textContent = 'Intervalo inválido!';
      return;
    }
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultado').textContent = `Número sorteado: ${sorteado}`;
  }
  
  function retornar() {
  window.history.back()
}