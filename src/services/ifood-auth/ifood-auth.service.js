// Initializes the `ifood-auth` service on path `/ifood-auth`
const createService = require('./ifood-auth.class.js');
const hooks = require('./ifood-auth.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'ifood-auth',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ifood-auth', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ifood-auth');

  service.hooks(hooks);
};
