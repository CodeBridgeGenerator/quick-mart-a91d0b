const assert = require('assert');
const app = require('../../src/app');

describe('\'orderItem\' service', () => {
  it('registered the service', () => {
    const service = app.service('orderItem');

    assert.ok(service, 'Registered the service (orderItem)');
  });
});
