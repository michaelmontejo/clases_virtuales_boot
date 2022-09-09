/* eslint-disable no-console */
const logMessage = (message) => {
  console.log(message);
};

const logError = (error) => {
  if(error.message) console.error(new Error( error.message ))
  console.error(new Error( error ))
};

module.exports = {
  logMessage,
  logError
}
