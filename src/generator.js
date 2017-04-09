'use strict';

const ct = require('crontalk');
const moment = require('moment');
const _ = require('lodash');

const deixisResolver = function(unit, modifier) {
	return function(moment_obj) {
		return Object.assign({}, moment_obj).add(modifier, unit);
	};
};


/*
{
    "span": {
        "days": 3,
        "lapse": {
            "from": {
                "year": 2012,
                "month": 0,
                "day": 12
            }
        }
    }
}
*/

module.exports = function(formulation, reference) {
	const descriptor = ct.parse(formulation);
	return create(descriptor, reference ? moment(reference) : moment());
}

function create(descriptor, reference) {
	const from = _.hasIn(descriptor, 'span.lapse.from') ? moment(encode(_.get(descriptor, 'span.lapse.from', {}), true)) : reference;
	const to = _.hasIn(descriptor, 'span.lapse.to') ? moment(encode(descriptor.span.lapse.to, false)) : null;

	return {
		encode: encode,
		occurrences: occurrences(descriptor, reference, from, to)
	};
}

function encode(date, from_to) {
	let ts = moment();

	ts.set('second', from_to ? 0 : 59);
	ts.set('millisecond', from_to ? 0 : 999);

	if (date.year !== undefined) {
		ts.set('year', date.year);
		ts.set('month', from_to ? 0 : 11);
		ts.set('day', from_to ? 1 : ts.endOf('month'));
		ts.set('hour', from_to ? 0 : 23);
		ts.set('minute', from_to ? 0 : 59);
	}

	if (date.month !== undefined) {
		ts.set('month', date.month);
		ts.set('day', from_to ? 1 : ts.endOf('month'));
		ts.set('hour', from_to ? 0 : 23);
		ts.set('minute', from_to ? 0 : 59);
	}

	if (date.day !== undefined) {
		ts.set('day', date.day);
		ts.set('hour', from_to ? 0 : 23);
		ts.set('minute', from_to ? 0 : 59);
	}

	if (date.hour !== undefined) {
		ts.set('hour', date.hour);
		ts.set('minute', from_to ? 0 : 59);
	}

	if (date.minute !== undefined) {
		ts.set('minute', date.minute);
	}

	return ts;
}

function* occurrences(descriptor, reference, from, to) {
	let current = from;

	while (true) {

		_.forOwn(descriptor.span, function(value, unit) {
			if (unit !== 'lapse') {
				current = current.add(value, unit);
			}
		});

		if ((to === null) || current.isBefore(to)) {
			yield current;
		} else {
			break;
		}
	}
}
