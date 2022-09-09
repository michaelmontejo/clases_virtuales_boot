const userServices = require('../services/users.service');

const getUsers = (size) => new Promise((resolve, reject) => {
  try {
    resolve( userServices.readUsers(size) );
  } catch (error) {
    reject( error );
  }
});

const getUser = (id) => new Promise((resolve, reject) => {
  try {
    resolve( userServices.readUser(id) );
  } catch (error) {
    reject( error );
  }
});

const postUser = (body) => new Promise((resolve, reject) => {
  try {
    const { id, name, userName, role, hiredDate } = body;
    if( !(id && name && userName && role && hiredDate)){
      reject({code: 400, message: "Bad request, check for user fields"});
    }else{
      const user = {
        id,
        name,
        userName,
        role,
        hiredDate
      };
      resolve( userServices.createUser(user) );
    };
  } catch (error) {
    reject(error);
  }
});

const putUser = (userID, body) => new Promise((resolve, reject) => {
  try {
    const { id, name, userName, role, hiredDate } = body;
    if( !(id && name && userName && role && hiredDate)){
      reject({code: 400, message: "Bad request, check for user fields"});
    }
    else{
      const user = {
        id,
        name,
        userName,
        role,
        hiredDate
      };
      resolve( userServices.updateUser(userID, user) );
    };
  } catch (error) {
    reject(error);
  }
});

const deleteUser = (id) => new Promise((resolve, reject) => {
  try {
    resolve( userServices.deleteUser(id) );
  } catch (error) {
    reject(error);
  }
});

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser
}
