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

// Array & Tuple

let ids: number[] = [1,22,54];
// ids.push("Jason");
// => Error: Argument of type 'string' is not assignable to parameter of type 'number'

let names: string[] = ["jason", "charlie"];


// A Tuple is an array containing different data types as we specified them. 

let userInfo: [string, number, boolean] = ["Jason", 23, true]; /** name, age, marital status */

// we can also write array containing tuples, like the following;
let friends: [string, number, boolean][];

friends = [
    ["Jason", 23, true],
    ["Freddie", 19, !1],
    ["Antony", Math.floor(Math.ceil(22*9)), Math.log2(23**4) !== 27*19 ]
]


// Union 
let cid: string | number;
cid = 12;
cid = "22458e";

// Enum
enum grades {
    Bad,
    Average,
    Good,
    Excellent
}

console.log(grades.Bad);
// => 0

enum grades2 {
    Bad = 50,
    Average = 60,
    Good = 80,
    Excellent = 99
};
console.log(grades2.Average);
// => 60


// Objects

const user: {id: number, name: string} = {
    id: 1,
    name: "John",
};

// if instead we write `id: "ef887x"`, it gives us an error

// However those lines above seems messy, and here is what we can do

// define the type before,
type Book = {
    id: string,
    title: string,
    year: number,
    isBestSeller: boolean
}

// then use is here
const myBook: Book = {
    id: "87ef2",
    title: "my book title",
    year: 2021,
    isBestSeller: 29/3 === 12,
}

 
// Type Assertion
let userid: any = 1;

let myUserId = userid as number;


// Functions

// the expected data types that will be passed in should be defined,
// besides, we can also provide data type of the return value
function addNum (x: number, y: number){
    return x + y;
}

const ad = (x: number, y: number) => x + y;

// Interfaces
/**
 * is a data structure, something like javascript
 * object, that tells compiler about data types 
 * of certain object
 */

interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1, name: "John"
}

// this line below gives us an error
// user1.id = 6;


// Function Interface
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;


// Classes
class Person {
    id: number
    name: string
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

const oj = new Person(3, "Jessica");

// Data Modifier

console.log(oj.id);
/**
 * that line above would give us 3,
 * however, if we change 
 *      id: number
 * becomes
 *      protected id: number
 * (there are three data modifiers, public by default, means it is accessible anywhere, 
 * private, makes the the property only accessible from within the class, 
 * and last, protected which only accessible within the class and within other classes which inherits it )
 * our last console.log(oj.id) would not work, 
 * 
 */