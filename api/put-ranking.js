const fs = require("fs");
const path = require("path");

exports.handler = (event, context, callback) => {
    const filePath = path.join(__dirname, "ranking.json");

    fs.readFile(filePath, (error, data) => {
        if (error) {
            return callback(error);
        }

        const dados = JSON.parse(data);
        const novoJogador = JSON.parse(event.body);

        dados.push(novoJogador);

        fs.writeFile(filePath, JSON.stringify(dados), error => {
            if (error) {
                return callback(error);
            }

            callback(null, {
                statusCode: 200,
                body: "Jogador adicionado com sucesso!"
            });
        });
    });
};