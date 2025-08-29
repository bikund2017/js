const { off } = require("process");

const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

const coffee = {
    name: "Cold Coffee",
    price: 100,
    isAvailable: true,

    orderChai: function(){
        console.log("coffee nahi bana");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, "name",{
    // writable: false,
    enumerable: false,
    // configurable: false
})

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (const [key, value] of Object.entries(coffee)) {
    if(typeof value !== 'function') {
        console.log(`${key} ${value}`);
    }
    
}