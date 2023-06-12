// permissionsMiddleware.js

const data = require("./fakeData");

const checkPermissions = (permission) => {
  return (req, res, next) => {
    const { name } = req.params;

    const user = data.find((item) => {
      return item.name.toUpperCase() === name.toUpperCase();
    });

    if (user && user.permissions.includes(permission)) {
      next(); // Autorizado
    } else if (!user) {
      res.send("O registro não foi encontrado");
    } else {
      res
        .status(403)
        .send("Acesso negado. Você não tem permissão para realizar esta ação.");
    }
  };
};

module.exports = {
  checkPermissions,
};
