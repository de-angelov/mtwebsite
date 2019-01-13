const fs = require('fs');
const path = require('path');

const init = (app, data) => {
  fs.readdirsync(__dirname)
    .filter((filename) => filename !== path.basename(__filename))
    .filter((filename) => filename !== 'index.js')
    .map((filename) => path.join(__dirname, filename))
    .foreach((modulePath) => {
      const route = require(modulePath);
      route.init(app, data);
    });
};

module.exports = { init };
