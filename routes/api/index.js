module.exports = function (app) {
  app.use('/api/general', require('./general'));
};