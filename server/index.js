const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const { MongoClient } = require('mongodb');
const localizationMiddleware = require('next-i18next/middleware');
const localization = require('../utils/localization');

const config = require('./config');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';

const nextapp = next({ dev });
const nextExpress = require('../../server')(nextapp);

nextExpress.injectInto(express);

let database;
const url = config.URL;
MongoClient.connect(url, (err, db) => {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
  }
  database = db;
});

nextapp.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  routes.init(server, database);
  localizationMiddleware(localization, nextapp, server);
});
