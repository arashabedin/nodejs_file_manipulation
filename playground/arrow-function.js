var square = (x) => {

    var result = x * x;
    return result;

};

var square2 = (x) => x*x;

var square3 = x => x*x;

console.log(square(9));
console.log(square2(9));
console.log(square3(9));


var user = {
    name : 'Arash',
    sayHi:()=> {
        //wrong , this can't be used in arrow functions
        console.log(`hey. Im ${this.name}` );
    },

    sayHiAlt() {
        console.log(arguments);
        //this will work inside regular function
        console.log(`hey. Im ${this.name}` );
    }
};

user.sayHi();
user.sayHiAlt(1,2,3);