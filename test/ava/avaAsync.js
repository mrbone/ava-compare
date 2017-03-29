const _ = require('lodash');
const test = require('ava');

var i = 0;

console.time('ava async');

_.times(15,() => {
 test('ava async test',(t) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    },100);
  }).then(() => {
    t.pass();
    i++;
    i === 15 && console.timeEnd('ava async');
  });
 });
});
