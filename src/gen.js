// "use strict";
//
// const ct = require('../../dist/crontalk.js');
// const moment = require('moment');
//
//
//
// //let descriptor = ct.parse('every 3 days from the last day of september this year');
// let descriptor = ct.parse('every 3 days from the 13th of jan 2012');
//
// function unpackDate(date) {
// 	return {
// 		minute: date.minutes(),
// 		hour: date.hours(),
// 		day: date.date() - 1,
// 		month: date.month(),
// 		year: date.year()
// 	};
// }
//
// function encode(descriptor) {
// 	let ts = moment(Date.now());
//
// 	ts.set('second', 0);
// 	ts.set('millisecond', 0);
//
// 	if (descriptor.year !== undefined) {
// 		ts.set('year', descriptor.year);
// 		ts.set('month', 0);
// 		ts.set('day', 0);
// 		ts.set('hour', 0);
// 		ts.set('minute', 0);
// 	}
//
// 	if (descriptor.month !== undefined) {
// 		ts.set('month', descriptor.month);
// 		ts.set('day', 0);
// 		ts.set('hour', 0);
// 		ts.set('minute', 0);
// 	}
//
// 	if (descriptor.day !== undefined) {
// 		ts.set('day', descriptor.day);
// 		ts.set('hour', 0);
// 		ts.set('minute', 0);
// 	}
//
// 	if (descriptor.hour !== undefined) {
// 		ts.set('hour', descriptor.hour);
// 		ts.set('minute', 0);
// 	}
//
// 	if (descriptor.minute !== undefined) {
// 		ts.set('minute', descriptor.minute);
// 	}
//
// 	console.log(descriptor);
// 	console.log(ts);
//
// 	return ts;
// }
//
// function* occurrences(descriptor, reference) {
// 	// reference point for the deixis
// 	let now = moment(reference);
// 	let current;
//
// 	let from = now;
// 	let to = null;
// 	if (((descriptor || {}).span || {}).lapse || {}) {
//
// 		let lapse = descriptor.span.lapse;
//
// 		if (lapse.from !== undefined) {
// 			let encoded = encode(lapse.from);
// 			from = moment.max(encoded, from);
// 			console.log(encoded);
// 		}
//
//
// 		if (lapse.to !== undefined) {
// 			to = encode(lapse.to);
// 		}
//
// 		//let from_packed = descriptor.span.lapse.from;
// 		//const from = Object.assign({}, now, descriptor.span.lapse.from)
//
// 		/*for (let unit in from) {
// 			if (from[unit] === 'this') {
// 				from[unit] = now[unit];
// 			} else if (from[unit] === 'last') {
// 				from[unit] = now[unit] - 1;
// 			} else if (from[unit] === 'next') {
// 				from[unit] = now[unit] + 1;
// 			}
// 		}*/
//
// 		/*if (from.year || {}) {
//
// 		}
//
// 		if (from.month || {}) {
// 		}
//
// 		if (from.week || {}) {
// 		}
//
// 		if (from.day || {}) {
// 			if (from.day === 'this') {
//
// 			}
// 		}
//
// 		if (from.hour || {}) {
// 		}
//
// 		if (from.minute || {}) {
// 		}*/
//
// 	}
//
// 	current = from;
//
// 	while (true) {
// 		if (descriptor.span !== undefined) {
// 			Object.keys(descriptor.span).forEach(function(unit) {
// 				if (unit !== 'lapse') {
// 					var	x = moment(descriptor.lapse.from)
// 					console.log(x.format('LLLL'));
// 					current = current.add(descriptor.span[unit], unit);
// 				}
// 			});
//
// 			if ((to === null) || current.isBefore(to)) {
// 				yield current;
// 			} else {
// 				break;
// 			}
// 		}
// 	}
// }
//
// var gen = occurrences(descriptor, Date.now());
//
//
// console.log(gen.next().value);
// console.log(gen.next().value);
