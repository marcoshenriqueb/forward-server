const users = require('./users/users.service.js');
const businesses = require('./businesses/businesses.service.js');
const businessAreas = require('./business-areas/business-areas.service.js');
const orders = require('./orders/orders.service.js');
const menuItems = require('./menu-items/menu-items.service.js');
const motoboys = require('./motoboys/motoboys.service.js');
const paymentMethods = require('./payment-methods/payment-methods.service.js');
const menuCategories = require('./menu-categories/menu-categories.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(businesses);
  app.configure(businessAreas);
  app.configure(orders);
  app.configure(menuItems);
  app.configure(motoboys);
  app.configure(paymentMethods);
  app.configure(menuCategories);
};
