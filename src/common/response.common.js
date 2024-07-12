const TYPE_CODES = {
  success: 200,
  error: 400,
  internalError: 500,
  unathorized: 401,
};

class Response {
  constructor({ status, code, message, data }){
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  send(res){
    return res.status(this.code).json({
      status: this.status,
      message: this.message,
      data: this.data
    });
  }
}

class Success extends Response {
  constructor(data, message=false){
    super({
      status: true,
      code: TYPE_CODES.success,
      message: message || 'The operation is sucessfully.',
      data
    });
  }
}

class Error extends Response {
  constructor(message){
    super({
      status: false,
      code: TYPE_CODES.error,
      message
    });
  }
}

class Unathorized extends Response {
  constructor(message){
    super({
      status: false,
      code: TYPE_CODES.unathorized,
      message
    });
  }
}

class InternalError extends Response {
  constructor(message){
    super({
      status: false,
      code: TYPE_CODES.internalError,
      message
    });
  }
}


class HandlerError {
  constructor(res, error){
    this.error = error;
    this.res = res;
  }

  exec(){
    let isCustomizeError = this.error instanceof Response;
    if(isCustomizeError) return this.error.send(this.res);
    
    let isObjectError = typeof this.error == 'object';
    return new InternalError(
      isObjectError ? this.error.message : this.error
    ).send(this.res);
  }
}

module.exports = {
  Success,
  Error,
  InternalError,
  HandlerError,
  Unathorized
};