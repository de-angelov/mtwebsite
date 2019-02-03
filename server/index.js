const next = require('next');
const express = require('express');
const nextExpressServer = require('next-express/server');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const { MongoClient } = require('mongodb');

const localizationMiddleware = require('next-i18next/middleware');
const localization = require('../utils/localization');

const config = require('./config');
const router = require('./routes');

const dev = config.ENV !== 'production';

const nextapp = next({ dev });


const nextExpress = nextExpressServer(nextapp).injectInto(express);

const url = config.URL;
MongoClient
  .connect(url)
  .then((database) => {
    nextapp
      .prepare()
      .then(() => {
        const server = nextExpress();

        server.use(bodyParser.json());
        // app.use(morgan('dev'));
        server.use(morgan('dev'));
        router.init(server, database);

        localizationMiddleware(localization, nextapp, server);

        server.listen(config.PORT, (err) => {
          if (err) {
            throw err;
          }
          console.log(`listening port ${config.PORT}`);
        });
      });
  })
  .catch((err) => { throw err; });

// Prints: /Users/mjr
