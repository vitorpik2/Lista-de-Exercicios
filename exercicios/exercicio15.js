let votos = [0, 0, 0];

function votar(opcao) {
  votos[opcao]++;
  mostrar();
}

function mostrar() {
  const total = votos.reduce((a, b) => a + b, 0);
  const nomes = ['Gato', 'Cachorro', 'Coelho'];
  let res = '';

  votos.forEach((v, i) => {
    const perc = total ? ((v / total) * 100).toFixed(1) : 0;
    res += `${nomes[i]}: ${v} votos (${perc}%)<br>`;
  });

  document.getElementById('resultado').innerHTML = res;
}

function retornar() {
  window.history.back()
}