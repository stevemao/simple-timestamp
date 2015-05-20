#!/usr/bin/env node
'use strict';
var meow = require('meow');
var simpleTimestamp = require('./');

meow({
  help: [
    'Usage',
    '  simple-timestamp'
  ].join('\n')
});

console.log(simpleTimestamp());
