const data = require("./fakeData"); //Como o "data" não é reatribuída, torno o objeto constante, para ter mais domínio de código.

const userConsultationCount = {}; //Vamos armazenar a contagem de consultas de cada usuário.

const getUser = (req, res, next) => {
  const name = req.query.name; //Como o "name" não é reatribuída, torno a variável uma constante, para ter mais domínio de código.

  let userExists = false;

  for (let i = 0; i < data.length; i++) {
    //Adicionei strict comparison, para ter uma comparação no valor e no tipo dos operandos e ter mais controle de código.
    if (name.toUpperCase() === data[i].name) {
      res.send(data[i]);
      userExists = true;

      if (userConsultationCount[name]) {
        userConsultationCount[name]++;
      } else {
        userConsultationCount[name] = 1;
      }

      break; //Com o break, o loop será interrompido assim que o usuário for encontrado.
    }
  }
  if (!userExists) {
    res.send(`O registro ${name} não foi encontrado em nosso sistema!`); //Adicionei uma mensagem caso o registro não seja encontrado.
  }
};

const getAllUsers = (req, res, next) => {
  res.send(data);
};

const getUserConsultationCount = (req, res, next) => {
  //Através desse método, vamos acessar a quantidade de consultas de um usuário específico.
  const name = req;
  const count = userConsultationCount[name] || 0;

  res.send(`O usuário ${name} foi consultado ${count} vezes.`);
};

module.exports = {
  getUser,
  getAllUsers,
  getUserConsultationCount,
};
