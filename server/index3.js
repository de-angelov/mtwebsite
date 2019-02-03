// // import express from 'express';
// // import next from 'next';
// // import next from 'next';
// // import express from 'express';
// // import bodyParser from 'body-parser';
// // import localizationMiddleware from 'next-i18next/middleware';
// // import localization from '../utils/localization';

// const next = require('next');
// const express = require('express');
// const bodyParser = require('body-parser');
// const localizationMiddleware = require('next-i18next/middleware');
// const localization = require('../utils/localization');


// const PORT = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());

// app
//   .prepare()
//   .then(() => {
//     const server = express();
//     server.use(bodyParser.json());
//     localizationMiddleware(localization, app, server);


//     server.get('/projects/details:title', (req, res) => {
//       const actualPage = '/projects/details';
//       const query = { title: req.params.title };
//       app.render(req, res, actualPage, query);
//     });

//     server.get('/', (req, res) => res.redirect('/home'));

//     server.get('*', (req, res) => handle(req, res));

//     server.listen(PORT, (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log('listening port');
//     });
//   })
//   .catch((ex) => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
