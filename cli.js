#!/usr/bin/env node
'use strict';
const meow = require('meow');
const simpleTimestamp = require('.');

const cli = meow(`Usage
  simple-timestamp
  simple-timestamp -s .
  simple-timestamp --separator .
`, {
	flags: {
		separator: {
			type: 'string',
			alias: 's'
		}
	}
});

console.log(simpleTimestamp({separator: cli.flags.separator || ''}));
