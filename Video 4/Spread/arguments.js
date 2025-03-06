function sum(a,b,c){
    console.log(a + b + c);
}

const array1 = [1,2,3];
const obj1 = {one:10,two:20,three:30};

sum(...array1);
//sum(...obj1); ->No output

sum(...Object.values(obj1));