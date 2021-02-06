// template (class)
function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Generate new object, instances of constructor
var my_car = new car("Honda", "City", 2020);
var new_car = new car("Tesla", "Model 3", 2018);
var new_car2 = new car("Toyota", "Sprinter Trueno", 1983);