//spread operator
const array1 = [1,2,3,6,7,8];

function sum(a,b,c){
    console.log(a + b + c);
}
sum(...array1);

//rest operator
function restsum(...args){
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    console.log(sum);
}
restsum(...array1);