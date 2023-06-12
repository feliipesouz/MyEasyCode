var data = require("./fakeData");

const validateUserExists = (findUser, name, job, res) => {
  const validateUpdate = data.find((user) => user.name === name && user.job === job);
  if (!validateUpdate) {
    findUser.name = name;
    findUser.job = job;
    res.send(findUser);
  } else {
    res.send(
      `Já existe usuários com esses dados, altere pelo menos um deles para concluir a atualização.`
    );
  }
};

module.exports = function (req, res) {
  const id = req.query.id;

  const findUser = data.find((user) => user.id == id);

  if (!findUser) {
    res.send(`Não há registros com chave de identificação de valor ${id}`);
  } else {
    let name = req.body.name.toUpperCase();
    let job = req.body.job.toUpperCase();
    validateUserExists(findUser, name, job, res);
  }
};
