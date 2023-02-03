document.querySelector("#form-novo-jogador").addEventListener("submit", event => {
    event.preventDefault();

    const nomeJogador = document.querySelector("#nome-jogador").value;
    const pontosJogador = document.querySelector("#pontos-jogador").value;

    fetch("ranking.json")
        .then(response => response.json())
        .then(dados => {
            dados.push({ "nome": nomeJogador, "pontos": pontosJogador });

            fetch("ranking.json", {
                method: "PUT",
                body: JSON.stringify(dados),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(() => alert("Jogador adicionado com sucesso!"))
                .catch(() => alert("Erro ao adicionar jogador."));
        });
});

fetch("ranking.json")
    .then(response => response.json())
    .then(dados => {
        let rankingHTML = "";

        dados.forEach((jogador, index) => {
            rankingHTML += `<tr>
                <td>${index + 1}</td>
                <td>${jogador.nome}</td>
                <td>${jogador.pontos}</td>
            </tr>`;
        });

        document.querySelector("#ranking").innerHTML = rankingHTML;
    });