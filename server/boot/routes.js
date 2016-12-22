var path    = require("path");

module.exports = function(app) {
  app.get('/ping', function(req, res) {
     res.sendFile(pt('client/index.html'));
   });
};

function pt(relative) {
  return path.resolve(__dirname, '../..', relative);
}