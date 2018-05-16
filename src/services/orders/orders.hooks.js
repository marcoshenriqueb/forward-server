const { authenticate } = require('@feathersjs/authentication').hooks;
const { restrictToOwner, associateCurrentUser } = require('feathers-authentication-hooks');
const { alterItems } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ],
    get: [ restrictToOwner({ idField: 'business', ownerField: 'business' }) ],
    create: [
      associateCurrentUser({ idField: 'business', as: 'business' }),
      alterItems((rec, context) => {
        if (
          !rec.paymentMethods ||
          !rec.paymentMethods.filter(p => p.ifoodCode !== undefined).length
        ) {
          return rec;
        }
        
        return new Promise((resolve, reject) => (
          context.app.service('payment-methods').find({
            query: {
              ifoodCode: {
                $in: rec.paymentMethods.filter(p => p.ifoodCode !== undefined).map(p => p.ifoodCode),
              },
            }
          }).then((response) => {
            rec.paymentMethods = [
              ...rec.paymentMethods.filter(p => p.paymentMethod !== undefined),
              ...response.data.map(p => ({ paymentMethod: p._id })),
            ];

            resolve();
          }).catch(error => {
            reject(error);
          })
        )); 
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
