function verificarParOuImpar() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.textContent = "Por favor, digite um número válido.";
    return;
  }

  resultado.textContent = `O número ${numero} é ${numero % 2 === 0 ? 'Par' : 'Ímpar'}.`;
}

function retornar() {
  window.history.back()
}