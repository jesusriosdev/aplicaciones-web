// Hoisting ECMAScript <= 5 (var and function)

// var
console.log(name);

// function
hey();
function hey() {
    return "heeeey " + name2;
}
var name2 = "Jesus";


// Declare var and function on top, always