module.exports = (error, request, response, next) => {
  console.log(error);
  response.status(500);
};
