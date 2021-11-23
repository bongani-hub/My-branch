//primitive //valuetypes
let surname = 'bongz'; //string literal
let age = 30; //Number literal
let isApproved = false; //Boolean literal
let firstName = undefined;
let selectedColor = null;
console.log('surname');

//Refference value types.
//objets and arrays.
let person = {
    name: 'bongz',
     age: '26'
};
//name properties(dot notatio)also used to read the properties
person.name = 'lebza';
//bracket notation
//used to target property in run time.
person['name'] = 'mamzo';

console.log(person);
let selectedColor = ['red','blue'];//array literal //empty array
selectedColor[2] = 'green';
console.log(selectedColor[0]); //used to find displacemt of an array
//functions-perfomin a task.
function green(firstName,lastname){
    console.log('hellow world' + firstName);
}
greet ('john','duzu');
greet('mary');
//function calculating a value
function square(number){
    return number * number;
}
let number  =square(2);
console.log(number); //or
console.log(square(2));