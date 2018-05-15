// menuItems-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const menuItems = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: false, unique: true },
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
    menuCategory: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'menu-categories',
      required: true
    },
    responsibleAreas: [
      {
        responsibleArea: {
          type: mongooseClient.Schema.Types.ObjectId,
          ref: 'business-areas',
          required: true
        },
      }
    ],
    ifoodCode: { type: Number, required: false },
  }, {
    timestamps: true
  });

  return mongooseClient.model('menuItems', menuItems);
};
