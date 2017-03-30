const _ = require('lodash');
const test = require('ava');
const times = require('../utils/config').times;

var i = 0;

console.time('ava async');

_.times(times, () => {
  test('ava async test', (t) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 100);
    }).then(() => {
      t.pass();
      i++;
      i === times && console.timeEnd('ava async');
    });
  });
});
