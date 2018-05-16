/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    return Promise.resolve([]);
  }

  get (id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    this.app.service('payment-methods').find({}).then((data) => {
      if (data.data.length) return;
      
      Promise.all([
        this.app.service('payment-methods').create({ name: 'VALE - VR SMART (CARTÃO)', ifoodCode: 'VR_SMA' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - DINERS (MÁQUINA)', ifoodCode: 'DNREST' }),
        this.app.service('payment-methods').create({ name: 'DÉBITO - MASTERCARD (MÁQUINA)', ifoodCode: 'MEREST' }),
        this.app.service('payment-methods').create({ name: 'VALE - TICKET RESTAURANTE (CARTÃO)', ifoodCode: 'TRE' }),
        this.app.service('payment-methods').create({ name: 'DÉBITO - VISA (MÁQUINA)', ifoodCode: 'VIREST' }),
        this.app.service('payment-methods').create({ name: 'VALE - ALELO REFEIÇÃO / VISA VALE (CARTÃO)', ifoodCode: 'VVREST' }),
        this.app.service('payment-methods').create({ name: 'VOUCHER', ifoodCode: 'VOUCHER' }),
        this.app.service('payment-methods').create({ name: 'DINERS', ifoodCode: 'DNR' }),
        this.app.service('payment-methods').create({ name: 'DINHEIRO', ifoodCode: 'DIN' }),
        this.app.service('payment-methods').create({ name: 'VISA', ifoodCode: 'VIS' }),
        this.app.service('payment-methods').create({ name: 'CHEQUE', ifoodCode: 'CHE' }),
        this.app.service('payment-methods').create({ name: 'AMEX', ifoodCode: 'AM' }),
        this.app.service('payment-methods').create({ name: 'MASTERCARD', ifoodCode: 'MC' }),
        this.app.service('payment-methods').create({ name: 'DESCONTO', ifoodCode: 'BON' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - AMERICAN EXPRESS (MÁQUINA)', ifoodCode: 'RAM' }),
        this.app.service('payment-methods').create({ name: 'VALE - GREEN CARD (CARTÃO)', ifoodCode: 'GRNCAR' }),
        this.app.service('payment-methods').create({ name: 'VALE - SODEXO (CARTÃO)', ifoodCode: 'RSODEX' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - VISA (MÁQUINA)', ifoodCode: 'VSREST' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - MASTERCARD (MÁQUINA)', ifoodCode: 'RDREST' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - HIPERCARD (MÁQUINA)', ifoodCode: 'RHIP' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - ELO (MÁQUINA)', ifoodCode: 'REC' }),
        this.app.service('payment-methods').create({ name: 'DÉBITO - ELO (MÁQUINA)', ifoodCode: 'RED' }),
        this.app.service('payment-methods').create({ name: 'ELO', ifoodCode: 'ELO' }),
        this.app.service('payment-methods').create({ name: 'VALE - VALE CARD', ifoodCode: 'VALECA' }),
        this.app.service('payment-methods').create({ name: 'VALE - VEROCARD (CARTÃO)', ifoodCode: 'TVER' }),
        this.app.service('payment-methods').create({ name: 'VALE - REFEISUL (CARTÃO)', ifoodCode: 'RSELE' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - BANRICOMPRAS (MÁQUINA)', ifoodCode: 'BANRC' }),
        this.app.service('payment-methods').create({ name: 'DÉBITO - BANRICOMPRAS (MÁQUINA)', ifoodCode: 'BANRD' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - GOODCARD (MÁQUINA)', ifoodCode: 'GOODC' }),
        this.app.service('payment-methods').create({ name: 'CRÉDITO - VERDECARD (MÁQUINA)', ifoodCode: 'VERDEC' }),
        this.app.service('payment-methods').create({ name: 'PAYPAL', ifoodCode: 'PAY' }),
        this.app.service('payment-methods').create({ name: 'VALE - COOPER CARD CARTÃO)', ifoodCode: 'CPRCAR' }),
        this.app.service('payment-methods').create({ name: 'TERMINAL BANCARIA - PAGO CONTRA ENTREGA', ifoodCode: 'GER_CT' }),
        this.app.service('payment-methods').create({ name: 'VALE - GREEN CARD (PAPEL)', ifoodCode: 'GRNCPL' }),
      ]);
    });

    this.app.service('users').find({ email: 'teste@test.com' }).then((data) => {
      if (data.data.length) return;

      this.app.service('businesses').create({ name: 'TESTE' }).then((business) => {
        this.app.service('users').create({
          business: business._id,
          email: 'teste@teste.com',
          password: '123456',
          name: 'Marcos',
        }).then(() => {
          this.app.service('business-areas').create({
            name: 'Cozinha',
            business: business._id,
            step: 1,
          }).then((area) => {
            this.app.service('menu-categories').create({ name: 'Burgers', business: business._id }).then((c) => {
              this.app.service('menu-items').create({
                name: 'Tradicional',
                number: 1,
                business: business._id,
                menuCategory: c._id,
                responseAreas: [
                  { responseArea: area._id },
                ],
              });
              this.app.service('menu-items').create({
                name: 'Clássico',
                number: 2,
                business: business._id,
                menuCategory: c._id,
                responseAreas: [
                  { responseArea: area._id },
                ],
              });
              this.app.service('menu-items').create({
                name: 'Cheddar',
                number: 3,
                business: business._id,
                menuCategory: c._id,
                responseAreas: [
                  { responseArea: area._id },
                ],
              });
            });
          });

          this.app.service('business-areas').create({
            name: 'Despacho',
            business: business._id,
            step: 2,
            showAddress: true,
            showPaymentMethods: true,
          }).then((area) => {
            this.app.service('menu-categories').create({ name: 'Bebidas', business: business._id }).then((c) => {
              this.app.service('menu-items').create({
                name: 'Coca Cola',
                number: 4,
                business: business._id,
                menuCategory: c._id,
                responseAreas: [
                  { responseArea: area._id },
                ],
              });
              this.app.service('menu-items').create({
                name: 'Guaraná',
                number: 5,
                business: business._id,
                menuCategory: c._id,
                responseAreas: [
                  { responseArea: area._id },
                ],
              });
            });

            this.app.service('menu-categories').create({ name: 'Sobremesas', business: business._id }).then((c) => {
              this.app.service('menu-items').create({
                name: 'Palhita',
                number: 6,
                business: business._id,
                menuCategory: c._id,
                responseAreas: [
                  { responseArea: area._id },
                ],
              });
              this.app.service('menu-items').create({
                name: 'Brownie',
                number: 7,
                business: business._id,
                menuCategory: c._id,
                responseAreas: [
                  { responseArea: area._id },
                ],
              });
            });
          });
          
          this.app.service('ifood').create({
            business: business._id,
            username: 'POS-590422454',
            password: 'POS-590422454',
            merchant_id: '145223',
          });          
        });
      });
    });

    return Promise.resolve(data);
  }

  update (id, data, params) {
    return Promise.resolve(data);
  }

  patch (id, data, params) {
    return Promise.resolve(data);
  }

  remove (id, params) {
    return Promise.resolve({ id });
  }

  setup(app) {
    this.app = app;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
