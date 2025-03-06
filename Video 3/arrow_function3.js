function add(a,b,c){
    return arguments;
}

console.log(add(10,20,30)); //output ->[Arguments] { '0': 10, '1': 20, '2': 30 }

const addition = (num1,num2,num3)=>{
    return arguments;
}

console.log(addition(1,2,3)); //No output
//arrow functions don't return arguments keyword like functions