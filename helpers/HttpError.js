export const HttpError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
  };
  
  export const ctrlWrapper = (ctrl) => {
    const func = async (req, res, next) => {
      try {
        await ctrl(req, res, next);
      } catch (error) {
        next(error);
      }
    };
    return func;
  };
  
  export const handleMongooseError = (error, _, next) => {
    error.status = 400;
    next();
  };