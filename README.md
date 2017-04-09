# crontalk-moment v0.0.1
> A generator-based interpreter for Crontalk.



## Installation

Clone the repository

	git clone --depth=1 git+https://github.com/lud77/cron-talk-moment.git projectFolder

## Why?

[Crontalk](https:/github.com/lud77/cront-talk) is a library implementing a DSL that allows you to express Cron-like (and more) repeated-events expressions in a human readable syntax.
However, Crontalk is only a parser and just translates almost-natural-language strings of text into a JSON format.

Crontalk-moment implements the next step, taking Crontalk's JSON output as input and processing it to generate the timestamps of the repeating events.
As the name suggests, this implementation uses the Moment.js library to compute the timestamps.


# Features / Usage

## Generator-based interface







## Roadmap

- extend to cover a bigger subset of Crontalk's features (eventually all of them)
- implement an event-emitter version to actually generate events at the correct times




## Licensing

This package is released under the [MIT License](https://opensource.org/licenses/MIT)

