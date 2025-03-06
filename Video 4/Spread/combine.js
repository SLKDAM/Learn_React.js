//Using spread operater- combining objects , arrays elements

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];

console.log(array3);

const obj1 = {first:10,second:20};
const obj2 = {third:30,fourth:40};

const obj3 = {...obj1,...obj2};
console.log(obj3);