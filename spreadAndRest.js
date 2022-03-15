// Spread only spread only spread the elements of an array a

const arr = [2, 4, 5];
const arr2 = [7, 9, 10];
const emAr = [...arr, ...arr2]

console.log(emAr);


//Rest can only be used at the end when destructuring  an array


const [fName, lName, ...rest] = ['Youssouf', 'Yogue', 456, true, 990];

console.log(rest);

