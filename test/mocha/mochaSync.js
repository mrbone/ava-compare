const _ = require('lodash');
const chai = require('chai');
const times = require('../utils/argvOptions').times;

console.time('mocha sync');
var i = 0;
_.times(times, function() {
  describe('mocha sync test', () => {
    it('make it pass', () => {
      chai.expect(true).to.be.true;
      i++;
      i === times && console.timeEnd('mocha sync');
    });
  });
});
