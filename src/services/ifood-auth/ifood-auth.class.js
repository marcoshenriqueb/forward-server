const rp = require('request-promise');

/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    return Promise.resolve([]);
  }

  get (id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return this.app.service('ifood').find()
      .then((response) => {
        if (!response.data.length) return 'No credentials registered for this user.';

        const credentials = {
          client_id: this.app.get('ifood').client_id,
          client_secret: this.app.get('ifood').client_secret,
          grant_type: 'password',
          username: response.data[0].username,
          password: response.data[0].password,
        };

        var options = {
          method: 'POST',
          uri: `${this.app.get('ifood').url}oauth/token`,
          qs: credentials,
        };

        
        return rp(options).then((data) => {
          return data;
        }, error => error);
      }, error => error);
  }

  update (id, data, params) {
    return Promise.resolve(data);
  }

  patch (id, data, params) {
    return Promise.resolve(data);
  }

  remove (id, params) {
    return Promise.resolve({ id });
  }

  setup(app) {
    this.app = app;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
