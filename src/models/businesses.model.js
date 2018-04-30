// businesses-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const businesses = new Schema({
    name: { type: String, required: true },
    resetHour: { type: String, default: '02:00' },
    dispatchAlertTime: { type: Number, default: 20 },
  }, {
    timestamps: true
  });

  return mongooseClient.model('businesses', businesses);
};
