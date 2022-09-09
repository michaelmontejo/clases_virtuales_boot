const express = require('express');
const bodyParser = require('body-parser');
const responseMessage = require('./lib/response-message');
const { faker } = require('@faker-js/faker');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

let users = [];
for(let index=0; index < 100; index++){
  users.push({
    id: String(index),
    name: faker.name.firstName(),
    userName: faker.name.lastName(),
    role: faker.name.jobArea(),
    hiredDate: faker.date.between(),
  })
}

app.get('/users', (req, res) => {
  const { size } = req.query;

  if(size){
    const sizedUsers = users.slice(1, size );
    res.status(200).json({
      users: sizedUsers
    })
  };

  res.status(200).json({
    users: users
  })
});

app.get('/users/:id', (req, res) =>{
  const { id } = req.params;
  const userIndex = users.findIndex(item => item.id === id);
  const user = users[userIndex];
  if(!user){
    responseMessage( res, 404, "User not found");
  };

  res.status(200).json({
    user: users[userIndex]
  });
});

app.post('/users', (req, res) => {
  const { id, name, userName, role, hiredDate } = req.body;
  if( !(id && name && userName && role && hiredDate)){
    responseMessage(res, 400, "Bad request, check for user fields.");
  }

  const user = {
    id,
    name,
    userName,
    role,
    hiredDate
  };
  users.push( user );
  res.status(201).json({
    message: "user created succesfully",
    data: user
  });
});

app.put('/users/:userID', (req, res) => {
  const { userID } = req.params;
  const { id, name, userName, role, hiredDate } = req.body;
  const userIndex = users.findIndex(item => item.id === userID);
  if(!users[userIndex]){
    responseMessage(res, 404, "User not found");
  };
  if( !(id && name && userName && role && hiredDate)){
    responseMessage(res, 400, "Bad request, check for user fields.")
  }

  const user = {
    id,
    name,
    userName,
    role,
    hiredDate
  };
  users[userIndex] = user

  res.status(200).json({
    message: "user updated succesfully",
    data: user
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
    const userIndex = users.findIndex(item => item.id === id);
  if(!users[userIndex]){
    responseMessage(res, 404, "user not found");
  };

  users = users.filter(item => item.id !== id);
  responseMessage(res, 200, "user deleted succesfully")
});

app.listen(3000, () =>{
  // eslint-disable-next-line no-console
  console.log("The application is running at: http://127.0.0.1:3000");
});
