'use strict';
import test from 'ava';
import simpleTimestamp from '.';

test('should contain current date', t => {
	const now = new Date();
	const data = simpleTimestamp({separator: '.'}).split('.');

	t.deepEqual(data[0], now.getFullYear().toString());
});
