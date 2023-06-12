const data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body; //Aqui eu desestruturei o código e obtive um resultado mais Clean Code.

  const user = data.find(
    (register) =>
      register.name === name.toUpperCase() && register.job === job.toUpperCase()
  ); //Com o find, conseguimos retornar o primeiro registro encontrado que se encaixe na condição especificada.

  if (!user) {
    const newUser = {
      id: data.length + 1,
      name: name.toUpperCase(),
      job: job.toUpperCase(),
    };
    data.push(newUser);
    res.send(newUser);
  } else {
    res.send(`O usuário ${name} já foi registrado`); // Adiciona uma mensagem de erro caso o registro já exista.
  }
};
