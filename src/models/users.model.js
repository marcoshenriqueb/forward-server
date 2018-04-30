// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
    name: {
      type: String,
      required: false
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function(v) {
          return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: '{VALUE} is not a valid email.'
      },
    },
    password: { type: String, required: true },  
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
