// motoboys-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const motoboys = new Schema({
    name: { type: String, required: true },
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('motoboys', motoboys);
};
