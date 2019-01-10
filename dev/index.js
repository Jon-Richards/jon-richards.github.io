// @ts-check
'use strict';

// @ts-ignore
require('./views/scss/app.scss');

import {Test} from './test';

const test = new Test('test');
test.sayHi();
