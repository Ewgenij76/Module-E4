
//задание № 1

const task = {a:1, b:2};
function value (obj){ 
  for (let key in obj) { 
    if (obj.hasOwnProperty(key)) { 
      console.log(key, obj[key]); } 
  } 
}
value(task);


//задание № 2

const someObj = { first: 1, second: 'book' }; 
const a = 'first' 
const b = 'paper' 
function oneFunc(c, someObj) 
  { return c in someObj; } 
console.log(oneFunc(a, someObj)); 
console.log(oneFunc(b, someObj));


//задание № 3

function obj(){
    return Object.create(null);
   }
console.log (obj());
