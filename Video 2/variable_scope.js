var _var = 10;
let _let = 20;
const _const = 30;

//console.log(_var,_let,_const);

function scopeTest(){
    var _var2 = 100;
    let _let2 = 200;
    const _const2 = 300;

    if(true){
        var _var3 = "one";
        let _let3 = "Two";
        const _const3 = "Three";
    }
    console.log(_var3);                     //var is function scope
    //console.log(_var3,_let3,_const3); -> No output

    console.log(_var2,_let2,_const2);       //let,const are block scope
}
scopeTest();
//console.log(_var3,_let3,_const3); -> No output