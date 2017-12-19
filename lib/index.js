'use strict';
const formatter = require('./formatter');
const display = require('./display');

module.exports = (results) => {
  const {files, rules} = formatter(results);
  console.log('==== Files ====');
  display(files);
  console.log("\n");
  console.log('==== Rules ====');
  display(rules);
}