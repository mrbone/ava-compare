const _ = require('lodash');

const test = require('ava');

var i = 0;

console.time('ava sync');

_.times(15,function(){
 test('some test',function(t){
   t.pass();
   i++;
   i === 15 && console.timeEnd('ava sync');
 });
});
