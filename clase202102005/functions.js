// Declarative: Hoisting happens, can be called before being declared.
function myFunction() {
    return 5;
}

// Expression or Anonymous: Hoisting doesn't happen, must be declared before you call it.
var myFunction = function(a, b) {
    var result = a + b;
    return result;
}
myFunction(1,3);

function sayHi(name) {
    console.log(`Hi ${name}`);
    return;
}