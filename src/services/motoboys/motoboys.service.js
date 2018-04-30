// Initializes the `motoboys` service on path `/motoboys`
const createService = require('feathers-mongoose');
const createModel = require('../../models/motoboys.model');
const hooks = require('./motoboys.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'motoboys',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/motoboys', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('motoboys');

  service.hooks(hooks);
};
