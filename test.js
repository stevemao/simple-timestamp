'use strict'
import test from 'ava'
import simpleTimestamp from './'

test('should contain current date', (t) => {
  var now = new Date()
  var data = simpleTimestamp({ separator: '.' }).split('.')

  t.deepEqual(data[0], now.getFullYear().toString())
})
