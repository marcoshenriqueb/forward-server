// Initializes the `businessAreas` service on path `/business-areas`
const createService = require('feathers-mongoose');
const createModel = require('../../models/business-areas.model');
const hooks = require('./business-areas.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'business-areas',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/business-areas', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('business-areas');

  service.hooks(hooks);
};
