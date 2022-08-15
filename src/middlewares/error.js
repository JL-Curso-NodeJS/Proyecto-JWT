const errors = require('../const/errors')

module.exports = function (err, req, res, next) {

  let response = {
    success: false,
    error: {
      code: err.code || 500, 
      message: err.message || 'Internal server error' 
    }
  }

  
  if (err.isJoi) {
    let validationErrorType = err.details[0].type 
    let errorKey = 'ValidationError' 
    if (validationErrorType === 'any.required') { 
      errorKey = 'FaltanCampos'
    }
    response.error.code = errors[errorKey].code 
    response.error.message = errors[errorKey].message 
  }


  if (err.message === 'Not Found') { 
    response.error.code = 404 
    response.error.message = 'Not Found'
  }

  res.status(200).json(response) 
}
