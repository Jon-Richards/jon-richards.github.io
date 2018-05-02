'use strict';

;var test = (function() {
  var sayHi = function (str) {
    console.log('hello, this is a test ' + str);
  }
  
  return {
    sayHi: sayHi
  }
})();

module.exports = test;