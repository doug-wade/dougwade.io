const bunyan = require("bunyan");

const bunyanOptions = {
  name: "dougwade.io",
  streams: [
    {
      level: "info",
      stream: process.stdout
    }, {
      level: "debug",
      type: "rotating-file",
      path: "logger.log",
      period: "1d",
      count: 3
    }
  ],
  serializers: bunyan.stdSerializers,
  src: true
};

module.exports = bunyan.createLogger(bunyanOptions);
