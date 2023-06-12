const { getUserConsultationCount } = require("./teste1");
module.exports = function (req, res) {
  const name = req.query.name;
  getUserConsultationCount(name, res);
};
