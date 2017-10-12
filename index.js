store = { drivers: [], passengers: [], trips: [] };
let drivId = 1;
let passId = 1;
let tripId = 1;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = drivId++;
    store["drivers"].push(this);
  }

  trips() {
    return store["trips"].filter(x => x.driverId === this.id);
  }

  passengers() {
    const arr = this.trips();
    const passArr = [];
    for (const ele of arr) {
      passArr.push(ele.passenger());
    }
    return passArr;
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = passId++;
    store["passengers"].push(this);
  }

  trips() {
    return store["trips"].filter(x => x.passengerId === this.id);
  }

  drivers() {
    const arr = this.trips();
    const drivArr = [];
    for (const ele of arr) {
      drivArr.push(ele.driver());
    }
    return drivArr;
  }
}

class Trip {
  constructor(driver, passenger) {
    if (driver) {
      this.driver = function() {
        return driver;
      };
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passenger = function() {
        return passenger;
      };
      this.passengerId = passenger.id;
    }
    this.id = tripId++;
    store["trips"].push(this);
  }
}
