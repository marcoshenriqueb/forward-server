const assert = require('assert');
const app = require('../../src/app');

describe('\'motoboys\' service', () => {
  it('registered the service', () => {
    const service = app.service('motoboys');

    assert.ok(service, 'Registered the service');
  });
});
