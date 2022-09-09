const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const log = require("./lib/log-messages");

const routerApi = require('./routes');
const responseMessage = require('./lib/response-message');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => log.logMessage("Connected to the database"))
  .catch(error => log.logError(error));

routerApi(app);

app.all('*', (req, res) => {
  responseMessage( res, 400, "Bad request");
});

app.listen(port, () =>{
  // eslint-disable-next-line no-console
  console.log(`The application is running at: http://127.0.0.1:${port}`);
});
