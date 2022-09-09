const userSchema = require('../models/users.model');

const readUsers = () => new Promise((resolve, reject) => {
  userSchema.find()
    .then((users) => resolve( users ))
    .catch((error) => reject({code: 500, message: error}))
});

const readUser = (id) => new Promise((resolve , reject) => {
  userSchema.findById(id)
    .then((user) => resolve(user))
    .catch((error) => reject({code: 500, message: error}) );
});

const createUser = (user) => new Promise((resolve, reject) => {
  const userDB = userSchema(user);
  userDB.save()
    .then(() => resolve({code: 201, message: "User created successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const updateUser = (id, user) => new Promise((resolve , reject) => {
  userSchema.findByIdAndUpdate(id, user)
    .then(() => resolve({code: 201, message: "User updated successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const deleteUser = (id) => new Promise((resolve , reject) => {
  userSchema.findByIdAndDelete(id)
    .then(() => resolve({code: 200, message: "User deleted successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

module.exports = {
  readUsers,
  readUser,
  createUser,
  updateUser,
  deleteUser
}
