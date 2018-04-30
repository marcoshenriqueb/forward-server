// Initializes the `paymentMethods` service on path `/payment-methods`
const createService = require('feathers-mongoose');
const createModel = require('../../models/payment-methods.model');
const hooks = require('./payment-methods.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'payment-methods',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/payment-methods', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('payment-methods');

  service.hooks(hooks);
};
