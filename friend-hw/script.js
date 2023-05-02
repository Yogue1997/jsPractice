
// This given given value produce 18 sugar cookies
const cupOfFlour = 1.6;
const cupOfButter = 1.1;
const cupOfSugar = 2.15;
const cupOfVegOil = 0.25;


//This function is supposed to tell you how much ingredients you need
function result(sugar) {

  let defFlour = sugar * 0.0889;
  let defButter = sugar * 0.06111111;
  let defSugar = sugar * 0.11944444;
  let defVegOil = sugar * 0.01388889;

  let total = console.log(
    "Cup of flour",
    Math.round(defFlour * 100) / 100,
    "Cup to butter",
    Math.round(defButter * 100) / 100,
    "Cup of Sugar",
    Math.round(defSugar * 100) / 100,
    "Cup of veg oil",
    Math.round(defVegOil * 100) / 100
  );

  return total

}

console.log(result(18));