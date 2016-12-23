var path    = require("path");

module.exports = function(options) {
  return function customHandler(req, res, next) {
    // use options to control handler's behavior
    res.sendFile('index.html', { root: path.resolve(__dirname, '../..', 'client/dist') });
  }
};