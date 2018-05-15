// Initializes the `ifood` service on path `/ifood`
const createService = require('feathers-mongoose');
const createModel = require('../../models/ifood.model');
const hooks = require('./ifood.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'ifood',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ifood', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ifood');

  service.hooks(hooks);
};
