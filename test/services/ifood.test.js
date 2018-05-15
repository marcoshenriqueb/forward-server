const assert = require('assert');
const app = require('../../src/app');

describe('\'ifood\' service', () => {
  it('registered the service', () => {
    const service = app.service('ifood');

    assert.ok(service, 'Registered the service');
  });
});
