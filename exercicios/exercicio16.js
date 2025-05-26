function contar() {
    const texto = document.getElementById('texto').value.trim();
    const letras = texto.replace(/\s/g, '').length;
    const palavras = texto ? texto.trim().split(/\s+/).length : 0;
    document.getElementById('resultado').innerHTML = `Palavras: ${palavras}<br>Letras: ${letras}`;
  }
  
  function retornar() {
  window.history.back()
}