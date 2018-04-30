// Initializes the `businesses` service on path `/businesses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/businesses.model');
const hooks = require('./businesses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'businesses',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/businesses', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('businesses');

  service.hooks(hooks);
};
