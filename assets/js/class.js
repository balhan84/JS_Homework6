"use strict";

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    //{[
    //   this.length = length,
    //   this.width = width,
    //   this.height = height,
    // ]},
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate, 0, 1);
  }
  get age() {
    return this.getAge();
  }

  getAge() {
    const manufactureYear = this.manufactureDate.getFullYear();
    return new Date().getFullYear() - manufactureYear;
  }
  getFullInfo() {
    return `${this.brand} ${this.model} ${this.getAge()}`;
  }
}

const car = new Vehicle(
  { length: 2500, width: 1000, heigth: 1000 },
  "DAF",
  "C-500",
  2007
);
console.log(car.dimensions);

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    if (this.passengerCount < this.passengerLimit && ++this.passengerCount) {
      return true;
    }
    return false;
  }
  getFullInfo() {
    return `${this.brand} ${this.model} ${this.getAge()} ${
      this.passengerLimit
    }`;
  }
}

const bus = new PassengerTransport(
  { length: 7500, width: 2000, heigth: 2500 },
  "Volvo",
  "A77",
  2023,
  40,
  21
);
console.log(bus.addPassenger());
console.log(bus.addPassenger());
console.log(bus.passengerCount);
console.log(bus.getFullInfo());

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    if (weight < this.capacity) {
      return true;
    }
    return false;
  }
  getFullInfo() {
    return `${this.brand} ${this.model} ${this.getAge()} ${this.capacity}`;
  }
}

const truck = new FreightTransport(
  { length: 18500, width: 2600, heigth: 3000 },
  "MAN",
  "TGL",
  2020,
  5000
);
console.log(truck);
console.log(truck.checkLoadingPossibility(6000));
console.log(truck.getFullInfo());
