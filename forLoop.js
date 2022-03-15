//Practicing for loop and while loop

const str = "toussoufy123"




const checking = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'y'){
            return true
        }
    }
    return false
}

// console.log(checking(str));

let i = 0;

while (str[i] !== "y") {
    console.log(str[i]);
    i++
}

















// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'y'){
//         console.log(true);
//         break
//     }
//     else{
//         console.log(false);
//     }
// }