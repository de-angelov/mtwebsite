const { Router } = require('express');

const Controler = require('./api.controler');

const init = async (app, database) => {
  const router = new Router();
  const controler = new Controler(database);

  router
    .get('/home', async (req, res, next) => {
      const images = await controler.GetHomePageData();
      res.send({ images });
    })
    .get('/projects/all', async (req, res, next) => {
      const projects = await controler.GetAllProjectsPreviews();
      res.send({ projects });
    })
    .get('/projects:id', async (req, res, next) => {
      const id = req.params.category;
      const projectDetails = await controler.GetProjectDetailsByID(id);
      res.send({ projectDetails });
    });
  app.use('/api', router);
};

module.exports = { init };
