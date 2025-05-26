let secreto = Math.floor(Math.random() * 100) + 1;

function adivinhar() {
  const palpite = Number(document.getElementById('palpite').value);
  let resultado = document.getElementById('resultado');

  if (palpite === secreto) {
    resultado.textContent = 'Parabéns! Você acertou!';
  } else if (palpite < secreto) {
    resultado.textContent = 'Tente um número maior.';
  } else {
    resultado.textContent = 'Tente um número menor.';
  }
}

function retornar() {
  window.history.back()
}