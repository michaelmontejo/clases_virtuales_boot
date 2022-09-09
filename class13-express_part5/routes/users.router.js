const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const userController = require('../controllers/users.controller');

const router = express.Router();

router.get('', (req, res) => {
  const { size } = req.query;
  userController.getUsers(size)
    .then( users => {
      response(res, {code: 200, key: "users", payload: users})
    })
    .catch(error => {
      log.logError(error.log);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  userController.getUser(id)
    .then( user => {
      response(res, {code: 200, key: "user", payload: user})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.post('', (req, res) => {
  const { body } = req;
  userController.postUser(body)
    .then( result => {
      response(res, { code: result.code, key: "message", payload: result.message});
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.put('/:userID', (req, res) => {
  const { userID } = req.params;
  const { body } = req;
  userController.putUser(userID, body)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  userController.deleteUser(id)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    })
});

module.exports = router;
