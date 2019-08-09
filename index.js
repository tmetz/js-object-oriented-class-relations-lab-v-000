let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = { drivers: [], passengers:[], trips: [] };


class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId == this.id;
      }.bind(this)
    );
  }
  passengers() {
    return this.trips.map(
      function(trip) {
        return trip.passenger();
      }.bind(this)
    );
  }
}


class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId == this.id;
      }.bind(this)
    );
  }

  drivers() {
    return this.trips.map(
      function(trip) {
        return trip.driver();
      }.bind(this)
    );
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {

  }

}

/*
A driver has many trips, and has many passengers through trips.
A passenger has many trips, and has many drivers through trips.
A trip belongs to a driver and belongs to a passenger.
driver() - returns the driver associated with the trip
passenger() - returns the passenger associated with the trip
*/
