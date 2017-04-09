'use strict';

const assert = require('chai').assert;
const moment = require('moment');

const ctm = require('../src/generator');

function assert_equal_moments(gen, str) {
	assert.equal(gen.value.toString(), moment(str).toString());
}

describe('Every_Span_Clause', function() {
	it('should allow "every [n] [units]"', function() {
		const reference = '2017-04-09T00:00:00';
		const generator = ctm('every 3 hours', reference).occurrences;

		assert_equal_moments(generator.next(), '2017-04-09T03:00:00.000');
		assert_equal_moments(generator.next(), '2017-04-09T06:00:00.000');
	});

	it('should allow "every [n] [units] and [m] [units]"', function() {
		const reference = '2017-04-09T00:00:00';
		const generator = ctm('every 3 hours and 45 minutes', reference).occurrences;

		assert_equal_moments(generator.next(), '2017-04-09T03:45:00.000');
		assert_equal_moments(generator.next(), '2017-04-09T07:30:00.000');
	});

	it('should allow "every [n] [units] and [m] [units] and [o] [units]"', function() {
		const reference = '2017-04-09T00:00:00';
		const generator = ctm('every 1 days and 14 hours and 45 minutes', reference).occurrences;

		assert_equal_moments(generator.next(), '2017-04-10T14:45:00.000');
		assert_equal_moments(generator.next(), '2017-04-12T05:30:00.000');
	});

	it('should allow "every [unit]"', function() {
		const reference = '2017-04-09T00:00:00';
		const generator = ctm('every year', reference).occurrences;

		assert_equal_moments(generator.next(), '2018-04-09T00:00:00.000');
		assert_equal_moments(generator.next(), '2019-04-09T00:00:00.000');
	});
});
