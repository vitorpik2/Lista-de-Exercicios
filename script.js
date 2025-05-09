document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cards-container");
  
    const exercicios = [
      "Par ou Ímpar",
      "Contador com Passo",
      "Calculadora de IMC",
      "Calculadora Básica",
      "Verificador de Idade",
      "Gerador de Tabuada",
      "Lista de Compras",
      "Verificador de Palíndromos",
      "Simulador de Semáforo",
      "Conversor de Temperatura",
      "Simulador de Caixa Eletrônico",
      "Cronômetro",
      "Gerador de Senhas Aleatórias",
      "Simulador de Sorteio",
      "Enquete com Votos",
      "Contador de Palavras e Letras",
      "Verificador de Números Primos",
      "Cadastro com Validação",
      "Jogo de Adivinhação",
      "Simulador de Notas Escolares"
    ];
  
    exercicios.forEach((titulo, i) => {
      const id = i + 1;
  
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="img/exercicio${id}.jpg" alt="Exercício ${id}">
        <div class="card-body">
          <h2>Exercício ${id}</h2>
          <p>${titulo}</p>
          <button onclick="acessarExercicio(${id})">Acessar</button>
        </div>
      `;
  
      container.appendChild(card);
    });
  });
  
  function acessarExercicio(id) {
    window.location.href = `exercicios/exercicio${id}.html`;
  }
  