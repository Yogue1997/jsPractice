//Higher order function this is used in functional programming 

const transformer = (str , fn) => {
    console.log(fn(str));
}

const capitol = (str) =>{
    return str.toUpperCase();
}

transformer('Ricardo', capitol)