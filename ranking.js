$(document).ready(function() {
    // Carregar informações do banco de dados JSON
    $.getJSON("ranking.json", function(data) {
        var players = data.players;

        players.sort(function(a, b) {
            return b.score - a.score;
    });

    for (var i = 0; i < players.length; i++) {
        $("#ranking-table tbody").append(
            "<tr><td>" + (i + 1) + "</td><td>" + players[i].name + "</td><td>" + players[i].score + "</td></tr>"
        );
      }
    })

      // Adicionar informações de um novo jogador ao banco de dados JSON
    $("#add-player-form").submit(function(event) {
        event.preventDefault();
        var playerName = $("#player-name").val();
        var playerScore = $("#player-score").val();
        $.ajax({
            type: "POST",
            url: "ranking.json",
            data: JSON.stringify({ name: playerName, score: playerScore }),
            contentType: "application/json",
            success: function(data) {
            location.reload();
            }
        });
    });
});   