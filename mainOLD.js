//mdn console: best javascript documentation.

// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// // let, const - do not use var

// //let you can reassign values
// let age = 30;

// console.log(age);
// age=31;
// console.log(age);

// //const you cannot reassign values
// const constage = 30;
// //constage = 31; //will not work

// //always use const unless you expect value to be reassigned.

// //Strings, Numbers, Boolean, null, undefined, Symbol

// const name = "John"; //String
// const yearsold = 30; //Number
// const rating = 4.5; //Number
// const isCool = true; //Boolean
// const x = null;
// const y = undefined; //Type not yet determined
// let z;               //Type not yet determined

// console.log(typeof x); //prints object but this is an error. it is assigned type null;

//String Concatenation

const name = "John"; //String
const age = 30; //Number

console.log("My name is " + name + " and I am " + age); //old method

//Template literals es6
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = "Hello World";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.split(''));

const s2 = "tech, comp, it, code";
console.log(s2.split(', '));

//Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4); //construct array

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];

console.log(fruits);

console.log(fruits[1]); //oranges
console.log(fruits[0]); //apples
fruits[3] = 'grapes'; //you can add values to the array, you just cannot reassign the array itself
//ie : fruits = [];

fruits.push('grapefruit'); // add to end of array
fruits.unshift('strawberries'); //add to start of array
fruits.pop(); //take last value out of array
console.log(Array.isArray(fruits)); //is fruits an array
console.log(fruits.indexOf('oranges')); 
console.log(fruits);

// Object literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ["music", 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

const {firstName, lastName, address: {city}} = person; //pulling those values out of person object
console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';

console.log(person.email);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

//JSON requires double quotes on strings and double quotes for each key

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//Loops

//For
for(let i = 0; i <10; i++){
    console.log(i);
}

for(let i = 0; i <todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo.text);
}

//While
let i = 0;
while (i <10){
    console.log(i);
    i++;
}

// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
})

const todoText = todos.map(function(todo){
    return todo.text;
})

console.log(todoText);

const filterToDo = todos.filter(function(todo){
    return todo.isCompleted === true;
})

console.log(filterToDo);

//Combining 

const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompletedText);

//conditionals
const x = '10';

//double equals does not ensure that type matches

if (x == 10){
    console.log('x is 10'); //selects this condition
}else{
    console.log('x is not 10');
}

//triple equals also matches type

if (x === 10){
    console.log('x is 10');
} else{
    console.log('x is not 10'); //selects this condition
}

const y = 10;
const z = 4;

if ( x > 5 || y > 10){
    console.log('x is more than 5 or y is more than 10');
}

if ( x > 5 && y == 10){
    console.log('x is more than 5 and y is equal to 10');
}

//ternary operator

const g = 10;

const color = g > 10 ? 'red' : 'blue' //if g greater than 10, color is red, else blue

console.log(color);

//switch statement

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not blue or red');
        break;
}

//functions

function addNums(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}

addNums(5,4);

addNums(); //NaN if no default values.

// Arrow function

const addNumsArrow = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}

console.log(addNumsArrow(5,5));

const addNumsArrowCondense = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNumsArrowCondense(5,5));

//OOP

function Person(first, last, dob) {
    this.first = first;
    this.last = last;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.first} ${this.last}`;
    };
}

//Better practice for functions
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

//Instantiate an object

const father = new Person('Greg', 'Boyce', 1998);
const mother = new Person('mom', "miss", '3-6-1970');
console.log(father);
console.log(father.getBirthYear());
console.log(father.getFullName());

//es6 has classes:

//Class
class PersonClass {
    constructor(first, last, dob) {
        this.first = first;
        this.last = last;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.first} ${this.last}`;
    }
}

const brother = new PersonClass('Jim', 'Boyce', 2010);
console.log(brother);
console.log(brother.getBirthYear());
console.log(brother.getFullName());

// DOM

console.log(window);
//window.alert(1);

//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); //only selects the first one that appears on the page

//multiple elements

//recommended way
console.log(document.querySelectorAll('.item')); //returns nodelist/ similar to array and can run array methods on it

//other ways
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const ul = document.querySelector('.items');

// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click', (e) => { //lookup different kind of events ie mouseover
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target)
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Goodbye</h1>'; 
// });

//Start of programming functionality

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === ''){
        // alert('Please Enter Fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all Fields';

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

//if you want to save the above, use a backend like nodejs that connects to a database and saves the
//above to the database. send requests from the front end to the backend using fetch api or ajax.

//Should look into using these. local storage you can store data in users browser