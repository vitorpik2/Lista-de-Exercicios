function verificar() {
    const texto = document.getElementById("texto").value.toLowerCase().replace(/\s/g, '');
    const invertido = texto.split('').reverse().join('');
    const resultado = document.getElementById("resultado");
  
    resultado.textContent = texto === invertido ? "É um palíndromo!" : "Não é um palíndromo.";
  }
  