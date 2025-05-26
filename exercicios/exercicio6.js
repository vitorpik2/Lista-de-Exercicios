function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const tabuada = document.getElementById("tabuada");
    tabuada.innerHTML = "";
  
    if (isNaN(numero)) {
      tabuada.innerHTML = "<li>Digite um número válido.</li>";
      return;
    }
  
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement("li");
      item.textContent = `${numero} x ${i} = ${numero * i}`;
      tabuada.appendChild(item);
    }
  }
  
  function retornar() {
  window.history.back()
}