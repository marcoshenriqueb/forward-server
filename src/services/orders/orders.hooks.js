const { authenticate } = require('@feathersjs/authentication').hooks;
const { restrictToOwner, associateCurrentUser } = require('feathers-authentication-hooks');
const { populate } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ],
    get: [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ],
    create: [
      associateCurrentUser({ idField: 'business', as: 'business' }),
      populate({ 
        schema: {
          include: {
            service: 'payment-methods',
            nameAs: 'paymentMethods',
            parentFields: 'paymentMethodIfoodCodes',
            childField: 'ifoodCode',
          },
        } 
      }),
    ],
    update: [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ],
    patch: [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ],
    remove: [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ]
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
