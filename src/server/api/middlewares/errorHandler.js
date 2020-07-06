const errorHandler = (err, req, res, next) => {
  const {
    message = 'Unexpected error', stack, response = {}, code,
  } = err;
  const { status = 500 } = response;
  const statusCode = code || status;
  console.error(`[errorHandler] ${message}`, { stack, statusCode });
  const validStatusCode = (statusCode > 99 && statusCode < 600) ? statusCode : 500;
  return res.status(validStatusCode).json({ message });
};

module.exports = errorHandler;
