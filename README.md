# crontalk-moment v0.0.2
> A generator-based interpreter for Crontalk.



## Installation

	npm install --save crontalk-moment


## Why?

[Crontalk](https://github.com/lud77/cront-talk) is a library and an [NPM module](https://npmjs.com/package/crontalk) implementing a DSL that allows you to express Cron-like (and more) repeated-events expressions in a human readable syntax.
However, Crontalk is only a parser and just translates natural language strings of text into a custom JSON format.

Crontalk-moment implements the next step, taking Crontalk's JSON output as input and processing it to generate the timestamps of the repeating events.
As the name suggests, this implementation uses the Moment.js library to compute the timestamps.


# Features / Usage

## Generator-based interface

    const ctm = require('crontalk-moment');
	const gen = ctm('every 3 hours');

	console.log(gen.next());

## Supported features

This module currently only supports the basic Cron features (regular increments in years, months, weeks, days, hours adn/or minutes) with optional start/stop dates.








## Roadmap

- extend to cover a bigger subset of Crontalk's features (eventually all of them)
- implement an event-emitter version to actually generate events at the correct times




## Licensing

This package is released under the [MIT License](https://opensource.org/licenses/MIT)

