"use strict";
// Basic Types
let age = 42;
let nickName = "Caesar";
let isMarried = false;
// we defined so, to ensure the data types are kept the way we want them to.
/**
 * we can also define a variable and it's datatype to use later
 */
let height;
// then we use it
height = 145;
// height = true
// => Error: Type 'boolean' is not assignable to type 'number'.
// type "any" could be anything;
let isComing = true;
isComing = "may be";
// Array & Tuple
let ids = [1, 22, 54];
// ids.push("Jason");
// => Error: Argument of type 'string' is not assignable to parameter of type 'number'
let names = ["jason", "charlie"];
// A Tuple is an array containing different data types as we specified them. 
let userInfo = ["Jason", 23, true]; /** name, age, marital status */
// we can also write array containing tuples, like the following;
let friends;
friends = [
    ["Jason", 23, true],
    ["Freddie", 19, !1],
    ["Antony", Math.floor(Math.ceil(22 * 9)), Math.log2(Math.pow(23, 4)) !== 27 * 19]
];
// Union 
let cid;
cid = 12;
cid = "22458e";
// Enum
var grades;
(function (grades) {
    grades[grades["Bad"] = 0] = "Bad";
    grades[grades["Average"] = 1] = "Average";
    grades[grades["Good"] = 2] = "Good";
    grades[grades["Excellent"] = 3] = "Excellent";
})(grades || (grades = {}));
console.log(grades.Bad);
// => 0
var grades2;
(function (grades2) {
    grades2[grades2["Bad"] = 50] = "Bad";
    grades2[grades2["Average"] = 60] = "Average";
    grades2[grades2["Good"] = 80] = "Good";
    grades2[grades2["Excellent"] = 99] = "Excellent";
})(grades2 || (grades2 = {}));
;
console.log(grades2.Average);
// => 60
// Objects
const user = {
    id: 1,
    name: "John",
};
// then use is here
const myBook = {
    id: "87ef2",
    title: "my book title",
    year: 2021,
    isBestSeller: 29 / 3 === 12,
};
// Type Assertion
let userid = 1;
let myUserId = userid;
// Functions
// the expected data types that will be passed in should be defined,
// besides, we can also provide data type of the return value
function addNum(x, y) {
    return x + y;
}
const ad = (x, y) => x + y;
const user1 = {
    id: 1, name: "John"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
