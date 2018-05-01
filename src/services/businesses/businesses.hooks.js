const { authenticate } = require('@feathersjs/authentication').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [ authenticate('jwt'), restrictToOwner({ idField: 'business', ownerField: '_id' }) ],
    create: [],
    update: [ authenticate('jwt'), restrictToOwner({ idField: 'business', ownerField: '_id' }) ],
    patch: [ authenticate('jwt'), restrictToOwner({ idField: 'business', ownerField: '_id' }) ],
    remove: [ authenticate('jwt'), restrictToOwner({ idField: 'business', ownerField: '_id' }) ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
