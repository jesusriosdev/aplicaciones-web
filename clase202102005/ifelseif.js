if(true) {
    console.log("this is true");
} else {
    console.log("this is false");
}

var age = 17
if(age === 18) {
    console.log("you can vote for the first time!");
} else if (age > 18) {
    console.log("you can vote again!");
} else {
    console.log("sorry, you can't vote yet..")
}

// ternary
var esMayor = (age >= 18) ? true : false;

var numero = 1;
var result = numero === 1 ? "soy uno" : "no, no soy uno";