function adicionarItem() {
  const item = document.getElementById("item").value.trim();
  const lista = document.getElementById("lista");

  if (item === "") return;

  const li = document.createElement("li");
  li.textContent = item;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  lista.appendChild(li);
  document.getElementById("item").value = "";
}

function retornar() {
  window.history.back()
}