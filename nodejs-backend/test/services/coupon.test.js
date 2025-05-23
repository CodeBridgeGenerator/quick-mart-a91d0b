const assert = require('assert');
const app = require('../../src/app');

describe('\'coupon\' service', () => {
  it('registered the service', () => {
    const service = app.service('coupon');

    assert.ok(service, 'Registered the service (coupon)');
  });
});
