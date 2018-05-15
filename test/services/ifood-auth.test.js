const assert = require('assert');
const app = require('../../src/app');

describe('\'ifood-auth\' service', () => {
  it('registered the service', () => {
    const service = app.service('ifood-auth');

    assert.ok(service, 'Registered the service');
  });
});
