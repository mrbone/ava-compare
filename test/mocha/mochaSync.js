const _ = require('lodash');
const chai = require('chai');

console.time('mocha sync');
var i = 0;
_.times(15, function() {
  describe('mocha sync test', () => {
    it('make it pass', () => {
      chai.expect(true).to.be.true;
      i++;
      i === 15 && console.timeEnd('mocha sync');
    });
  });
});
