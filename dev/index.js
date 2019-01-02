// @ts-check
'use strict';

import {Test} from './test';

const test = new Test('test');
test.sayHi();

const anotherTest = new Test(1);
anotherTest.sayHi();