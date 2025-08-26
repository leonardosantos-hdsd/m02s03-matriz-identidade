function gerarMatrizIdentidade(n) {
  let matriz = [];

  for (let i = 0; i < n; i++) {
    let linha = "";
    for (let j = 0; j < n; j++) {
      linha += (i === j ? "1" : "0");
    }
    matriz.push(linha);
  }

  return matriz;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-matriz");
  const numeroInput = document.getElementById("numero");
  const saida = document.getElementById("saida");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = parseInt(numeroInput.value, 10);

    if (isNaN(n) || n <= 0) {
      saida.textContent = "❌ Digite um número válido (maior que 0).";
      console.log("Número inválido");
      return;
    }

    const matriz = gerarMatrizIdentidade(n);

    // Exibir no console
    console.log(`Matriz identidade ${n}x${n}:`);
    matriz.forEach(linha => console.log(linha));

    // Exibir na tela
    saida.innerHTML = matriz.join("<br>");
  });
});
