class Car {
  model;
  color;
  max_speed;
  name;
  company;
  isStarted = false;
  isMoving = false;
  currentSpeed = 0;
  gasSize;
  currentGas;
  #gasUsage = 0;
  gasUsageIntervalId;

  constructor(name, model, color, max_speed, company, gasSize = 40) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.max_speed = max_speed;
    this.company = company;
    this.gasSize = gasSize;
    this.currentGas = gasSize;
  }

  get gasUsage() {
    return this.#gasUsage;
  }

  start() {
    if (this.isStarted) {
      console.log(this.name + " is already started. No need to start again");
      return;
    }

    this.isStarted = true;
    console.log(this.name + " is started");
    this.gasUsageIntervalId = setInterval(() => {
      this.currentGas -= this.#gasUsage;
      console.log(`${this.name} has ${this.currentGas}l gas left`);

      if (this.currentGas <= 0) {
        clearInterval(this.gasUsageIntervalId);
        console.log(`${this.name} has run out of gas. Stopping...`);
        return;
      }
    }, 1_000);
  }

  stop() {
    if (!this.isStarted) {
      console.log(`${this.name} is not started yet, No need to start the car `);
    }
    this.stopMoving();
    this.#gasUsage = 0;
    this.isStarted = false;
    clearInterval(this.gasUsageIntervalId);
  }

  move() {
    if (!this.isStarted) {
      console.log(
        `${this.name} is not started yet, please start the car first`
      );
      return;
    }

    if (this.currentGas <= 0) {
      console.log(`${this.name} has run out of gas. Stopping...`);
      this.stopMoving();
      return;
    }

    this.currentSpeed = this.currentSpeed + 10;
    this.#gasUsage++;

    if (this.isMoving) {
      console.log(
        `${this.name}'s speed is increased by 10, current speed is ${this.currentSpeed}`
      );

      if (this.currentSpeed >= 60) {
        console.log(
          `Further speeding is not recommended as there might be a radar`
        );
      }

      return;
    }

    this.isMoving = true;
    console.log(
      `${this.name} started moving, current speed is ${this.currentSpeed}`
    );
  }

  stopMoving() {
    if (!this.isMoving) {
      console.log(`${this.name} is not moving anyways. No need to stop moving`);
      return;
    }

    this.isMoving = false;
    this.currentSpeed = 0;
    console.log(`${this.name} stopped moving`);
  }

  getStatus() {
    console.log(`
      Car Status:
      Name: ${this.name}
      Model: ${this.model}
      Color: ${this.color}
      Max Speed: ${this.max_speed} km/h
      Gas Size: ${this.gasSize}l
      Current Gas: ${this.currentGas}l
      Current Speed: ${this.currentSpeed} km/h
      Is Started: ${this.isStarted ? "Yes" : "No"}
      Is Moving: ${this.isMoving ? "Yes" : "No"}
    `);
  }

  refuel(amount) {
    if (!this.isStarted) {
      console.log(`${this.name} is not started. Start the car first.`);
      return;
    }

    if (amount <= 0) {
      console.log("Invalid refuel amount. Please provide a positive value.");
      return;
    }

    this.currentGas = Math.min(this.gasSize, this.currentGas + amount);
    console.log(
      `${this.name} has been refueled. Current gas: ${this.currentGas}l`
    );
  }
}

let bmw = new Car("My BMW", "X5", "black", 243, "BMW", 7);
let mers = new Car("My Mercedes", "222", "black", 155, "Mercedes", 100);

bmw.getStatus();
bmw.start();
bmw.move();
