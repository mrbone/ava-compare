const expect = require('chai').expect;
const _ = require('lodash');

var i = 0;
console.time('mocha async');

_.times(15, () => {
  describe('some async function', () => {
    it('async test', () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          expect('a').to.equal('a');
          resolve();
          i++;
          i === 15   && console.timeEnd('mocha async');
        }, 100);
      })
    });
  });
});
