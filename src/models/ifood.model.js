// ifood-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const ifood = new Schema({
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true,
      unique: true
    },
    username: { type: String, required: true },
    password: { type: String, required: true },
    merchant_id: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('ifood', ifood);
};
