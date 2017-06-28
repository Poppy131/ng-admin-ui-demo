module.exports = function (app) {
  app.use('/api/general', require('./general'));
  app.use('/api/test', require('./test'));
};