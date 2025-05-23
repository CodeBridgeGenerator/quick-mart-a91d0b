const assert = require('assert');
const app = require('../../src/app');

describe('\'supportTicket\' service', () => {
  it('registered the service', () => {
    const service = app.service('supportTicket');

    assert.ok(service, 'Registered the service (supportTicket)');
  });
});
