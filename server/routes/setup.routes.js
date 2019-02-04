const generalRoutes = require('./general');
const apiRoutes = require('./api');

const init = (app, database) => {
  generalRoutes.init(app, database);
};

module.exports = { init };
