const array1 = [1,2,3];
const array2 = ['x','y','z'];

console.log(array1,array2);

function sum(a,b,c){
    console.log(a + b + c);
}
sum(10,20,30);

sum(array1[0],array1[1],array1[2]);
sum(...array1); // spread operator