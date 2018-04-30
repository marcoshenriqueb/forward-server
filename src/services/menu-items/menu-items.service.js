// Initializes the `menuItems` service on path `/menu-items`
const createService = require('feathers-mongoose');
const createModel = require('../../models/menu-items.model');
const hooks = require('./menu-items.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'menu-items',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/menu-items', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('menu-items');

  service.hooks(hooks);
};
