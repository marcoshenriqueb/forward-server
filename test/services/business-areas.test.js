const assert = require('assert');
const app = require('../../src/app');

describe('\'businessAreas\' service', () => {
  it('registered the service', () => {
    const service = app.service('business-areas');

    assert.ok(service, 'Registered the service');
  });
});
