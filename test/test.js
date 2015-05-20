'use strict';
var assert = require('assert');
var simpleTimestamp = require('../');

it('should contain current date', function() {
  var now = new Date();
  var data = simpleTimestamp().split('.');

  assert.equal(data[0], now.getFullYear());
  assert(data[1].indexOf((now.getMonth() + 1)) >= 0);
  assert(data[2].indexOf(now.getDate()) >= 0);
});
