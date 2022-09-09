// Importing the express module
const express = require('express');

//Instance of express
const app = express();

// Middleware for give an json/string response
app.use(express.json());

//Building our first API
app.get('/', function(request, response){
  response.send("hola mundo");
});

// endpoints params
app.get('/param/:id/book-name/:bookName/user-name/:name', (req, res) =>{
  const id = req.params.id
  const bookName = req.params.bookName
  const userName = req.params.name
  res.json({
    title: "those are the params given by endpoint",
    id: id,
    bookName: bookName,
    userName
  })
})

// endpoint query: + http://127.0.0.1:3000/query?size=20
app.get('/query', (req, res) => {
  const { size } = req.query;
  res.json({
    title: "this is a query given by endpoint",
    size
  })
})

// Running the server
app.listen(3000, () =>{
  // eslint-disable-next-line no-console
  console.log("The application is running at: 127.0.0.1:3000");
})
