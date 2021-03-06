// businessAreas-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const businessAreas = new Schema({
    name: { type: String, required: true },
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
    step: { type: Number, required: true },
    showAddress: { type: Boolean, default: false },
    showPaymentMethods: { type: Boolean, default: false },
  }, {
    timestamps: true
  });

  return mongooseClient.model('businessAreas', businessAreas);
};
