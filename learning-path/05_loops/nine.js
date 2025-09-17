const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);

//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);


const ShoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "data structure",
        price: 5999
    },
    {
        itemName: "AI skill",
        price: 23309
    },
    {
        itemName: "js course",
        price: 2999
    },

    
]

const priceShopping = ShoppingCart.reduce( (acc,item) => acc + item.price, 0 )

console.log(priceShopping);
