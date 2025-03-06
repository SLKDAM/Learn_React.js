const array1 = [1,2,3];

const array2 = [...array1];
array1[0] = 20;
console.log(array1,array2);

const obj1 = {one:10,two:20,three:30};
const obj2 = {...obj1};

obj1['one'] = 16;
console.log(obj1,obj2);