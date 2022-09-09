const  DEFAULT_ERR_MSG = "Unexpected error";

const response = ( res, result ) => {
  if(result.key){
    res.status( result.code || 500 ).json({
      [result.key]: result.payload || DEFAULT_ERR_MSG
    })
  }else{
    res.status( result.code || 500 ).json({
      message: result.payload || DEFAULT_ERR_MSG
    })
  };
};

module.exports = response;
