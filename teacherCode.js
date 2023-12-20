// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

class Animal {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  speak() {
    console.log(`${this.name} cannot speak`);
  }
}

class Cat extends Animal {
  chaseMouse() {
    console.log(`${this.name} is chasing a mouse`);
  }

  speak() {
    console.log("Meow, meow, meow");
  }
}

class Dog extends Animal {
  chain;

  constructor(age, chain = false) {
    super(undefined, age);
    this.chain = chain;
  }

  gnaw() {
    console.log(`${this.name} is gnawing a bone`);
  }

  speak() {
    console.log("Wow, wow, wow");
  }
}

let cat = new Cat("mosh");
cat.walk();
cat.sleep();

cat.speak();

let dog = new Dog(2, true);
dog.speak();

let animals = [dog, cat];

animals.forEach((animal) => {
  animal.speak();
});

// class Car {
//   model;
//   color;
//   max_speed;
//   name;
//   company;
//   isStarted = false;
//   isMoving = false;
//   currentSpeed = 0;
//   gasSize;
//   currentGas;
//   #gasUsage = 0;
//   gasUsageIntervalId;

//   constructor(name, model, color, max_speed, company, gasSize = 40) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
//     this.max_speed = max_speed;
//     this.company = company;
//     this.gasSize = gasSize;
//     this.currentGas = gasSize;
//   }

//   get gasUsage() {
//     return this.#gasUsage;
//   }

//   start() {
//     if (this.isStarted) {
//       console.log(this.name + " is already started. No need to start again");
//       return;
//     }

//     this.isStarted = true;
//     console.log(this.name + " is started");
//     this.#gasUsage++;
//     this.gasUsageIntervalId = setInterval(() => {
//       this.currentGas -= this.#gasUsage;
//       console.log(`${this.name} has ${this.currentGas}l gas left`);
//     }, 3_000);
//   }

//   stop() {
//     if (!this.isStarted) {
//       console.log(`${this.name} is not started yet, No need to start the car `);
//     }
//     this.stopMoving();
//     this.#gasUsage = 0;
//     this.isStarted = false;
//     clearInterval(this.gasUsageIntervalId);
//     // show message
//   }

//   move() {
//     if (!this.isStarted) {
//       console.log(
//         `${this.name} is not started yet, please start the car first`
//       );

//       return;
//     }
//     this.currentSpeed = this.currentSpeed + 10;
//     this.#gasUsage++;

//     if (this.isMoving) {
//       console.log(
//         `${this.name}'s speed is increased by 10, current speed is ${this.currentSpeed}`
//       );

//       if (this.currentSpeed >= 60) {
//         console.log(
//           `Further speeding is not recommended as there might be a radar`
//         );
//       }

//       return;
//     }

//     this.isMoving = true;
//     console.log(
//       `${this.name} started moving, current speed is ${this.currentSpeed}`
//     );
//   }

//   stopMoving() {
//     if (!this.isMoving) {
//       console.log(`${this.name} is not moving anyways. No need to stop moving`);
//       return;
//     }

//     this.isMoving = false;
//     this.#gasUsage = 1;
//     this.currentSpeed = 0;
//     console.log(`${this.name} stopped moving`);
//   }
// }

// let bmw = new Car("My BMW", "X5", "black", 243, "BMW", 82);
// let mers = new Car("My Mercedes", "222", "black", 155, "Mercedes", 100);

// bmw.move();
// bmw.start();
// bmw.start();
// mers.start();

// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();
// bmw.move();

// console.log(bmw);

// class Person {
//   fName;
//   age;
//   // ...
//   constructor(fName, age) {
//     this.fName = fName;
//     this.age = age;
//   }
//   walk() {}
//   talk() {}
// }

// let eshmat = new Person("Eshmat", 32);
// console.log(eshmat);

// function Person(fName) {
//   this.fName = fName;
// }

// Person.prototype.talk = function () {
//   console.log(this);
// };

// Person.prototype.walk = () => {
//   console.log(this);
// };

// let eshmat = new Person("Eshmat");
// eshmat.talk();
// eshmat.walk();

// let person = {
//   fName: "Eshmat",
//   walk: () => {
//     console.log(this);

//     setTimeout(() => {
//       console.log(this);

//       setTimeout(() => {
//         console.log(this);
//       }, 1_000);
//     }, 1_000);
//   },
// };

// person.walk = person.walk.bind(person);
// person.walk();
