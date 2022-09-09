const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./routes');
const responseMessage = require('./lib/response-message');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

routerApi(app);

app.all('*', (req, res) => {
  responseMessage( res, 400, "Bad request");
});

app.listen(3000, () =>{
  // eslint-disable-next-line no-console
  console.log("The application is running at: http://127.0.0.1:3000");
});
