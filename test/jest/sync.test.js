const _ = require('lodash');
const times = require('../utils/config').times

_.times(times, () => {
  test('jest sync case', () => {
    expect(1).toBe(1);
  })
})
