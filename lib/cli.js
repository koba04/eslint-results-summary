#!/usr/bin/env node
'use strict';
const {summarize, displayChart} = require('./index');

let data = '';
process.stdin.on('data', (chunk) => {
  data += chunk;
});
process.stdin.on('end', () => {
  const {files, rules} = summarize(JSON.parse(data));
  console.log('==== Files ====');
  displayChart(files);
  console.log("\n");
  console.log('==== Rules ====');
  displayChart(rules);
});
