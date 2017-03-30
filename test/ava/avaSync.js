const _ = require('lodash');
const test = require('ava');
const times = require('../utils/config').times;

var i = 0;

console.time('ava sync');
_.times(times, function() {
  test('some test', function(t) {
    t.pass();
    i++;
    i === times && console.timeEnd('ava sync');
  });
});
