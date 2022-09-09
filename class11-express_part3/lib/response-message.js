const responseMessage = ( res, code, message ) => {
  res.status(code).json({
    message
  })
};

module.exports = responseMessage;
