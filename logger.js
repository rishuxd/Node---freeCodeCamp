const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  const logData = `Method: ${method}, URL: ${url}, Time: ${time}`;
  console.log(logData);
  next();
};

module.exports = logger;
