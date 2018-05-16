// Initializes the `seeders` service on path `/seeders`
const createService = require('./seeders.class.js');
const hooks = require('./seeders.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'seeders',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/seeders', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('seeders');

  service.hooks(hooks);
};
