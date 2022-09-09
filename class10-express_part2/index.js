const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// const user = {
//   id: "",
//   name: "",
//   userName: "",
//   role: "",
//   hiredDate: "",
// };

let users = [
  {
    id: "1",
    name: "Felipe",
    lastName: "Arias",
    userName: "felipe123",
    role: "seller",
    hiredDate: "01-01-2022"
  },
  {
    id: "2",
    name: "Ana",
    lastName: "Gomez",
    userName: "ana123",
    role: "admin",
    hiredDate: "28-02-2017"
  },
];

app.get('/users', (req, res) => {
  res.json({
    users: users
  })
});

app.get('/users/:id', (req, res) =>{
  const { id } = req.params;
  const userIndex = users.findIndex(item => item.id === id);

  res.json({
    user: users[userIndex]
  })
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);

  res.json({
    message: "user created succesfully",
    data: user
  })
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const userIndex = users.findIndex(item => item.id === id);
  users[userIndex] = user

  res.json({
    message: "user updated succesfully",
    data: user
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(item => item.id !== id);

  res.json({
    message: "user deleted succesfully",
  })
});

app.listen(3000, () =>{
  // eslint-disable-next-line no-console
  console.log("The application is running at: http://127.0.0.1:3000");
})
