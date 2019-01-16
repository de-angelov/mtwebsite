const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const { MongoClient } = require('mongodb');
const nextExpressServer = require('next-express/server');
const localizationMiddleware = require('next-i18next/middleware');
const localization = require('../utils/localization');

const config = require('./config');
const router = require('./routes');

const dev = process.env.NODE_ENV !== 'production';

const nextapp = next({ dev });
const nextExpress = nextExpressServer(nextapp);

nextExpress.injectInto(express);


const url = config.URL;
MongoClient
  .connect(url)
  .then((database) => {
    nextapp
      .prepare()
      .then(() => {
        const server = express();
        server.use(bodyParser.json());
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
