let y = 24;

function favFunction() {
    let x = 667;
    let anotherFavFunction = function () {
        console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
    }

    let yetAnotherFavFunction = function () {
        console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for letiable in global scope, finds it and outputs 24
    }

    anotherFavFunction();
    yetAnotherFavFunction();
}


favFunction();