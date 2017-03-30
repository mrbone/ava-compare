const _ = require('lodash');
const times = require('../utils/config').times

var i = 0;

console.time('jest async: ');

_.times(times, () => {
  test('jest async case', () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(1).toBe(1);
        resolve(i++);
        i === times && console.timeEnd('jest async: ');
      }, 100);
    })
  })
})
