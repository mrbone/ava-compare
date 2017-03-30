const expect = require('chai').expect;
const _ = require('lodash');
const times = require('../utils/config').times;

var i = 0;

console.time('mocha async');

_.times(times, () => {
  describe('some async function', () => {
    it('async test', () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          expect('a').to.equal('a');
          resolve();
          i++;
          i === times && console.timeEnd('mocha async');
        }, 100);
      })
    });
  });
});
