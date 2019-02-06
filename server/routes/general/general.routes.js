const { Router } = require('express');

const Controler = require('./general.controler.js');

const init = async (app, database) => {
  const router = new Router();
  const controler = new Controler(database);
  router
    // .pageRoute({
    //   path: '/home',
    //   render: '/home',
    //   async getProps(req, res) {
    //     const images = await controler.GetHomePageData();

    //     return { images };
    //   },
    // })
    // .pageRoute({
    //   path: '/projects',
    //   render: '/projects',
    //   async getProps() {
    //     const allProjectsPreviews = await controler.GetAllProjectPreviews();
    //     console.log('!!!===> allProjectsPreviews');
    //     return { allProjectsPreviews };
    //   },
    // })
    // .pageRoute({
    //   path: '/projects/details:id',
    //   render: '/projects/details:id',
    //   async getProps(req) {
    //     const id = req.params.category;
    //     const projectDetails = controler.GetProjectDetailsByID(id);
    //     return { projectDetails };
    //   },
    // })
    .get('/', (req, res) => res.redirect('/home'));

  app.use(['/', '/bg', '/en'], router);
};

module.exports = { init };
