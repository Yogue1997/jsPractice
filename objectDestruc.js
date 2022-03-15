// Object destructuting

const student = {
    fNme : "Youssouf",
    lNme : "Yogue"
}

// fName becomes x

let {fNme : x , lNme} = student


// student.fNme changed because x value has changed

x = "ooo"


console.log(x);
