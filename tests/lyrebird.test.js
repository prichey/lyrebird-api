const Lyrebird = require('./../lib/lyrebird');

const client = new Lyrebird();

test('lyrebird test returns true', () => {
  expect(client.test()).toBe(true);
});
