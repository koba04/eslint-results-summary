'use strict';

const path = require('path');
const assert = require('assert');
const eslint = require('eslint');

const {summarize} = require('../lib/index');

describe('summarize', () => {
  let engine;
  beforeEach(() => {
    engine = new eslint.CLIEngine({
      envs: ['es6'],
      baseConfig: {
        extends: ['eslint:recommended']
      },
      format: 'json'
    })
  });
  it('should be able to get the summarized results', () => {
    const result = engine.executeOnFiles([path.resolve(__dirname, 'fixtures', '*.js')]);
    const table = summarize(result.results);
    assert.deepStrictEqual(
      table.rules,
      {
        "constructor-super": 1,
        "no-cond-assign": 1,
        "no-constant-condition": 1,
        "no-debugger": 1,
        "no-unused-vars": 2,
      }
    );
    assert.deepStrictEqual(
      table.files,
      {
        'bar.js': 2,
        'foo.js': 4
      }
    );
  });
});