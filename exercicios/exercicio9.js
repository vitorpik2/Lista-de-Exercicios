function acender(cor) {
    document.querySelectorAll('.luz').forEach(el => el.classList.remove('acesa'));
    document.getElementById(cor).classList.add('acesa');
  }
  
  function retornar() {
  window.history.back()
}