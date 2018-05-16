// orders-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    number: { type: Number, required: true },
    address: { type: String, required: true },
    clientName: { type: String, required: true },
    paymentMethods: [
      {
        paymentMethod: {
          type: mongooseClient.Schema.Types.ObjectId,
          ref: 'payment-methods',
          required: true
        },
      }
    ],
    change: { type: Number, required: false },
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
    motoboys: [
      {
        motoboy: {
          type: mongooseClient.Schema.Types.ObjectId,
          ref: 'motoboys',
          required: true
        },
      }
    ],
    menuItems: [
      {
        menuItem: {
          type: mongooseClient.Schema.Types.ObjectId,
          ref: 'menu-items',
          required: true
        },
        notes: { type: String }
      }
    ],
    dispatched: { type: Boolean, default: false },
    step: { type: Number, default: 0 },
    counterTimeStart: { type: Date, default: Date.now },
  }, {
    timestamps: true
  });

  return mongooseClient.model('orders', orders);
};
