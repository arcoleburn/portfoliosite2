/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
//this isjust a test for es lint
"use strict";
// eslint-disable-next-line quotes
let str = "this is a string";
let unusedVar;
let usedVar = 35;

if (usedVar == 3) {
  usedVar = 30;
} else if (usedVar == 35) {
  usedVar += 1;
}
str += "new str now";
