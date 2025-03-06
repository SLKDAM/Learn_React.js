this.name = "Avishka";
const obj1 = {
    name: "Madhushan",
    normalfunction:function(){
        console.log(this.name)  //this keyword identify the nearest object in normal function
    },
    arrowfunction:()=>{
        console.log(this.name); //this keyword identify the global object(Out of scope) in arrow function
    }
};
//console.log(this.name);
obj1.normalfunction();
obj1.arrowfunction();