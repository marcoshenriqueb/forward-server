const { authenticate } = require('@feathersjs/authentication').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt'), restrictToOwner({ idField: '_id', ownerField: '_id' }) ],
    get: [ authenticate('jwt'), restrictToOwner({ idField: '_id', ownerField: '_id' }) ],
    create: [ hashPassword() ],
    update: [ hashPassword(),  authenticate('jwt'), restrictToOwner({ idField: '_id', ownerField: '_id' }) ],
    patch: [ hashPassword(),  authenticate('jwt'), restrictToOwner({ idField: '_id', ownerField: '_id' }) ],
    remove: [ authenticate('jwt'), restrictToOwner({ idField: '_id', ownerField: '_id' }) ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
