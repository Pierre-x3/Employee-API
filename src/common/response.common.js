
const CODES_SUCCESS = {
  success: 200,
  created: 201,
  accept: 203,
  notContent: 204
};

const CODES_ERROR = {
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  notAllowed: 405,
  notAcceptable: 406,
  conflict: 409,
  internalError: 500
};

class Response {
  constructor({ message, code, data }) {
    this.message = message;
    this.code = code;
    this.data = data;
  }

  send(res) {
    res.status(this.code).json({
      status: true,
      message: this.message,
      data: this.data
    });
  }
}

class Success extends Response {
  constructor(data, message){
    super({ 
      code: CODES_SUCCESS.success, 
      message: message || 'satisfactorily completed', 
      data
    });
  }
}

class NotContent extends Response {
  constructor(message) {
    super({ 
      code: CODES_SUCCESS.notContent, 
      message: message || 'satisfactorily completed'
    });
  }
}

class BaseError extends Error {
  constructor({ message, isOperation, code }){
    super(message);
    this.code = code;
    this.isOperation = isOperation;
    Error.captureStackTrace(this);
  }

  send(res){
    res.status(this.code).json({
      status: false,
      message: this.message
    });
  }
}

class BadRequest extends BaseError {
  constructor(message){
    super({
      code: CODES_ERROR.badRequest,
      isOperation: true,
      message: message || 'The server could not understand the request due to invalid syntax.' 
    })
  }
}

class Unauthorized extends BaseError {
  constructor(message){
    super({
      code: CODES_ERROR.unauthorized,
      isOperation: true,
      message: message || 'Authentication is required and has failed or has not yet been provided'
    })
  }
}

class Forbidden extends BaseError {
  constructor(message){
    super({
      code: CODES_ERROR.forbidden,
      isOperation: true,
      message: message || 'You do not have permission to access the requested resource'
    })
  }
}

class NotFound extends BaseError {
  constructor(message){
    super({
      code: CODES_ERROR.notFound,
      isOperation: true,
      message: message || 'The requested resource could not be found on this server'
    })
  }
}

class NotAllowed extends BaseError {
  constructor(message){
    super({
      code: CODES_ERROR.notAllowed,
      isOperation: true,
      message: message || 'The request method is not supported for the requested resource'
    })
  }
}

class Conflict extends BaseError {
  constructor(message){
    super({
      code: CODES_ERROR.conflict,
      isOperation: true,
      message: message || 'The request could not be completed due to a conflict with the current state of the resource'
    })
  }
}

class InternalError extends BaseError {
  constructor(message){
    super({
      code: CODES_ERROR.internalError,
      isOperation: false,
      message: message || 'An unexpected error occurred on the server. Please try again later'
    })
  }
}

const isOperationError = (err) => {
  return err instanceof BaseError;
}

const handerError = (res, err) => {
  if(isOperationError(err)){
    err.send(res);
  } else new InternalError(err.message).send(res);
}


module.exports = {
  handerError,
  isOperationError,
  InternalError,
  Conflict,
  NotAllowed,
  NotFound,
  Forbidden,
  BadRequest,
  Unauthorized,
  Success,
  NotContent
};