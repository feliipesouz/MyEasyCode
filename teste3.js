let data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.params;

  if (!name) {
    return res.status(400).send("O nome do usuário não foi fornecido.");
  }

  const index = data.findIndex((item) => item.name.toUpperCase() === name.toUpperCase()); // Encontra o índice do item com o nome correspondente

  if (index !== -1) {
    const removedItem = data.splice(index, 1)[0]; // Remove o item do array pelo índice. Atribuímos a uma variável para podermos retornar ela na mensagem res.
    res.send(`Usuário ${removedItem.name} removido com sucesso!`);
  } else {
    res.send("O registro não foi encontrado"); // Adiciona uma mensagem de erro caso o registro não seja encontrado
  }
};
