// Global scope.
var name = "Jesus";


// Local scope.
function fun() {
    var last_name = "Rios";
    return name + " " + last_name;
}

// last_name is not defined.
// console.log(last_name);