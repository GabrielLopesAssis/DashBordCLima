fetch("dados.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Não foi possível carregar o arquivo de dados.");
    }

    return response.json();
  })
  .then((data) => {
    // Dados de hoje
    document.getElementById("cidade").innerText = data.cidade;
    document.getElementById("temperatura").innerText = data.hoje.temperatura;
    document.getElementById("clima").innerText = data.hoje.clima;
    document.getElementById("umidade").innerText = data.hoje.umidade;

    const iconeHoje = document.getElementById("icone");
    iconeHoje.src = `img/${data.hoje.icone}`;
    iconeHoje.alt = data.hoje.clima;

    // Previsão dos próximos dias
    const container = document.getElementById("previsao-container");

    data.previsao.forEach((dia) => {
      const div = document.createElement("div");

      div.classList.add("previsao-dia");

      div.innerHTML = `
        <h4>${dia.dia}</h4>
        <img src="img/${dia.icone}" alt="${dia.clima}">
        <p>${dia.temperatura}</p>
        <p>${dia.clima}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch((error) => {
    document.getElementById("cidade").innerText = "Erro ao carregar dados";
    console.error("Erro:", error);
  });