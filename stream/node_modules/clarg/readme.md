# clarg

[![NPM Version][npm-img]][npm-url]
[![NPM Downloads][npm-dl-img]][npm-url]
[![Travis build][travis-img]][travis-url]
[![Coveralls coverage][coveralls-img]][coveralls-url]

[npm-url]: https://npmjs.org/package/clarg
[npm-img]: https://img.shields.io/npm/v/clarg.svg
[npm-dl-img]: https://img.shields.io/npm/dm/clarg.svg
[travis-img]: https://img.shields.io/travis/vot/clarg.svg
[travis-url]: https://travis-ci.org/vot/clarg
[coveralls-img]: https://img.shields.io/coveralls/vot/clarg.svg
[coveralls-url]: https://coveralls.io/github/vot/clarg


The simplest command-line parsing utility for node.js

## Why create another library for this?

All of the existing libraries (i.e. commander or nomnom) require you to specify
upfront what options you expect.

Clarg simply returns you a full set of arguments it found allowing you
to bind everything in any way you want, anywhere you want.

No questions asked, no prescribed way of doing things. Just a simple object.


## Usage

Simply import clarg anywhere in your code and it will output an object.

You don't have to specify any options upfront, just require this module
and execute it.

It doesn't matter where in code you run it - you will always get the same result
which is really just a broken down list of arguments and options passed to the process.

It supports options specified with single dashes, double dashes and their values
after a space or an equal sign.

The only thing that matters is the order: first you specify arguments, after
the first dash has been spotted everything gets treated as an option.

## Example

Running the script below with these arguments
`node test.js start countdown --format=long -detach -parse=yes`
will produce an object like this:

```
{
  args: [ 'start', 'countdown' ],
  opts: { format: 'long', detach: true, parse: 'yes' },
  raw: [ 'start', 'countdown', '--format=long', '-detach', '-parse=yes' ]
}
```
