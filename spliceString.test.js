var splice = require('./spliceString.js');
var assert = require(assert);

var exampleString = 'abcdefg';

var output = splice(exampleString, 1, 2, 'ZZZ');
//'aZZZcdefg'

if (assert.equal(output, 'aZZZcdefg')) {
	return 0;
} else {
	return 1;
}
