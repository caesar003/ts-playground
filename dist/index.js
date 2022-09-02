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
