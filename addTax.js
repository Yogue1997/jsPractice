// A function that a return  ==   abstraction
const addTax = (rate) =>{
    return function (value) {
        return rate * value
    }
}

const tax = addTax(5)

console.log(tax(10));