// Basic Types

let age: number = 42;
let nickName: string = "Caesar";
let isMarried: boolean = false;

// we defined so, to ensure the data types are kept the way we want them to.

/**
 * we can also define a variable and it's datatype to use later
 */

let height: number

// then we use it

height = 145;

// height = true
// => Error: Type 'boolean' is not assignable to type 'number'.


// type "any" could be anything;

let isComing:any = true;
isComing = "may be";