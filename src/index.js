const $ = require('jquery');

//import math from './util/math.js';

import nice from './say-hello.js';

console.log(nice);

let sayHello = () => console.log('hello');

sayHello();

$('#first').append('<button type="input">');