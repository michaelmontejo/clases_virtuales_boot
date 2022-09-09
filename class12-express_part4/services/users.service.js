const { faker } = require('@faker-js/faker');

let users = [];
for(let index=0; index < 10; index++){
  users.push({
    id: String(index),
    name: faker.name.firstName(),
    userName: faker.name.lastName(),
    role: faker.name.jobArea(),
    hiredDate: faker.date.between(),
  })
}

const DELAY_TIME = 500;

const readUsers = (size) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(users.length === 0) reject({code: 404, message: "No users"})
    else{
      if(size){
        const sizedUsers = users.slice(1, size );
        resolve( sizedUsers )
      }else{
        resolve(users);
      }
    }
  }, DELAY_TIME);
});

const readUser = (id) => new Promise((resolve , reject) => {
  setTimeout(() => {
    const user = users.find(item => item.id === id);
    if(!user) reject({code: 404, message: "User not found"})
    else resolve( user );
  }, DELAY_TIME);
});

const createUser = (user) => new Promise((resolve) => {
  setTimeout(() => {
    users.push( user );
    resolve({code: 201, message: "User created successfully"});
  }, DELAY_TIME);
});

const updateUser = (id, user) => new Promise((resolve , reject) => {
  setTimeout(() => {
    const userIndex = users.findIndex(item => item.id === id);
    if(!users[userIndex]) reject({code: 404, message: "User not found"});
    else{
      users[userIndex] = user;
      resolve({code: 200, message: "User updated successfully"});
    };
  }, DELAY_TIME);
});

const deleteUser = (id) => new Promise((resolve , reject) => {
  setTimeout(() => {
    const user = users.find(item => item.id === id);
    if(!user) reject({code: 404, message: "User not found"});
    else{
      users = users.filter(item => item.id !== id);
      resolve({code: 200, message: "User deleted successfully"});
    }
  }, DELAY_TIME);
});

module.exports = {
  readUsers,
  readUser,
  createUser,
  updateUser,
  deleteUser
}
