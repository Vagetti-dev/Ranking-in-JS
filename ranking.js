document.querySelector("#form-novo-jogador").addEventListener("submit", event => {
    event.preventDefault();

    const nomeJogador = document.querySelector("#nome-jogador").value;
    const pontosJogador = document.querySelector("#pontos-jogador").value;

    fetch("https://<nome-do-seu-projeto>.vercel.app/api/put-ranking", {
    method: "POST",
    body: JSON.stringify({ "nome": nomeJogador, "pontos": pontosJogador }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => response.json())
    .then(dados => alert(dados.body))
    .catch(() => alert("Erro ao adicionar jogador."));
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