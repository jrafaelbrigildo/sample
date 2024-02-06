const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log(`Hi! I am ${this.firstName} ${this.lastName}`)},
    sayBye: function(){console.log("Goodbye!")}
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 28,
    isEmployed: false,
    sayHello: () => {console.log("Hi! I am Patrick...")},
    sayBye:  () => {console.log("Bye...")}
};

person2.sayHello();
