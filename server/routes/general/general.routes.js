const { Router } = require('express');

const Controller = require('./general.controler.js');

const init = (app, database) => {
  const router = new Router();
  const controller = new Controller(database);

  router
    .get('/', (req, res) => res.redirect('/home'))
    .pageRoute({
      path: '/home',
      render: '/home',
      async getProps() {
        const images = controller.GetHomePageData();
        return { images };
      },
    })
    .pageRoute({
      path: '/projects',
      render: '/projects',
      async getProps() {
        const allProjectsPreviews = controller.GetAllProjectPreviews();
        return { allProjectsPreviews };
      },
    })
    .pageRoute({
      path: '/projects/details:id',
      render: '/projects/details:id',
      async getProps(req) {
        const id = req.params.category;
        const projectDetails = controller.GetProjectDetailsbyId(id);
        return { projectDetails };
      },
    });

  app.use('/', router);
};

module.exports = { init };
