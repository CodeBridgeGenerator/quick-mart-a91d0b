const assert = require('assert');
const app = require('../../src/app');

describe('\'supermarket\' service', () => {
  it('registered the service', () => {
    const service = app.service('supermarket');

    assert.ok(service, 'Registered the service (supermarket)');
  });
});
