//Bind method 

const student1 = {
    fName : "Youssouf",
    lName: "Yogue",
    age: 24,
    grade : 85,
    email : "yousgmail.com",
    sInfos () {
        console.log(`The student name is ${this.fName} ${this.lName} and his/her email is ${this.email}`);
    },
    sGrade () {
        console.log(`${this.fName} ${this.lName} grade is ${this.grade}`);
    }
}

const student2 = {
    fName : "Sarah",
    lName : "Some1",
    email : "sarahsome1@gmail.com",
    grade : 97
}

const grade =  student1.sGrade

const trying =  grade.bind(student2)

trying()





