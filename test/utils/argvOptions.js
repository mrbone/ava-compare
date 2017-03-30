const yargs = require('yargs');

const argv = yargs.default('times', 15).argv;

module.exports = {
  times: argv.times
}
