const responseHandler = (res, statusCode, status, message, data = null) => {
  const response = { status };

  if (message) response.message = message;
  if (data) response.data = data;

  res.status(statusCode).json(response);
};

export default responseHandler;
