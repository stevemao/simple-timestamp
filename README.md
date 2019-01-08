#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Get a simple timestamp

Fast as it doesn't have bloated methods.


## Install

```sh
$ npm install --save simple-timestamp
```


## Usage

```js
var simpleTimestamp = require('simple-timestamp');

simpleTimestamp();
// => 20181108161103

simpleTimestamp({
  separator: '.'
});
// => 2018.11.08.16.12.06
```

```sh
$ npx simple-timestamp
20181108161103
```


## License

MIT © [Steve Mao](https://github.com/stevemao)


[npm-image]: https://badge.fury.io/js/simple-timestamp.svg
[npm-url]: https://npmjs.org/package/simple-timestamp
[travis-image]: https://travis-ci.org/stevemao/simple-timestamp.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/simple-timestamp
[daviddm-image]: https://david-dm.org/stevemao/simple-timestamp.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/stevemao/simple-timestamp
[coveralls-image]: https://coveralls.io/repos/stevemao/simple-timestamp/badge.svg
[coveralls-url]: https://coveralls.io/r/stevemao/simple-timestamp
