function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
    // Call the Car constructor with make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit the properties and methods from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
