const generalRoutes = require('./general');

const init = (app, database) => {
  generalRoutes.init(app, database);
};

module.exports = { init };
