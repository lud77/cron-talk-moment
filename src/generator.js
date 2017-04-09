'use strict';

const ct = require('crontalk');
const moment = require('moment');
const _ = require('lodash');

module.exports = function(formulation, reference) {
	const descriptor = ct.parse(formulation);

	const from = moment(completeDate(_.get(descriptor, 'span.lapse.from', {}), true));
	const to = moment(completeDate(_.get(descriptor, 'span.lapse.to', {}), false));

	console.log(from);
	console.log(to);

	return {
		completeDate: completeDate,
		occurrences: occurrences(descriptor, reference)
	};
}

/**
 *  y   d ->  not valid
 *  y m d ->   y  m  d
 *        ->  cy cm cd
 *
 *    m d ->  cy  m  d
 *      d ->  cy cm  d
 *  y m   ->   y  m  1
 *  y     ->   y  1  1
 */
function completeDate(date, from_to) {
	const newDate = Object.assign({}, date);

	if (newDate.year && (newDate.month == undefined) && newDate.day) {
		throw 'Date not valid ' + JSON.stringify(newDate);
	}

	if ((newDate.year == undefined) && (newDate.month == undefined) && (newDate.day == undefined)) {
		return {
			year: moment().year(),
			month: moment().month(),
			day: moment().day()
		};
	}

	if (newDate.day) {
		newDate.day += 1;
	}

	if (newDate.year && newDate.month && newDate.day) {
		return newDate;
	}

	newDate.year = _.get(newDate, 'year', moment().year());

	const hasDay = (newDate.day !== undefined);
	const baseDay = from_to ? 1 : 31;
	const baseMonth = from_to ? 0 : 11;
	
	newDate.month = _.get(newDate, 'month', hasDay ? moment().month() : baseMonth);
	newDate.day = _.get(newDate, 'day', baseDay);

	return newDate;
}

function* occurrences(descriptor, reference) {
	while (true) {
		yield 12;
	}
}