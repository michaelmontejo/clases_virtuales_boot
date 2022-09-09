const express = require('express');

const usersRouters = require('./users.router');
// const booksRouters = require('x');

function routerApi(app){
  const router = express.Router();
  app.use("", router);
  router.use('/users', usersRouters);
  // router.use('/books', booksRouters);
};

module.exports = routerApi;
