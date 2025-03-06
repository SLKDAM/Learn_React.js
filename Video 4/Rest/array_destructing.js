//array_destructing - 
const array1 = [1,2,3,4,5];

//directly accessing the elements of the array
const b = array1[1];
const c = array1[2];

//console.log(a,b,c);

//accssing the elements of the array using array destructing

const [first,second,...rest_argumnets] = array1;
console.log(first);
console.log(second);
console.log(rest_argumnets);

//accessing the elements of a object using array destructing
const obj1 = {name:"Avishka",age:24, city:"Galle",school:"RCG"};
const {name,age,...rest_arguments} = obj1;
console.log(name);
console.log(age);
console.log(rest_arguments);