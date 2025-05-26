function verificarPrimo() {
    const num = Number(document.getElementById('num').value);
    let ehPrimo = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        ehPrimo = false;
        break;
      }
    }
    document.getElementById('resultado').textContent = ehPrimo ? 'É primo!' : 'Não é primo.';
  }
  
  function retornar() {
  window.history.back()
}