// Import examples
// import { apikey } from "./util";
// import apikey from "./util.js";
// console.log(apikey);

// arrow function example
// export default (username, message) => {
//   console.log("hello");
//   return username + message;
// };

// Function examples;
// function greetUser(userName, message = "Hello") {
  // console.log(userName);
  // console.log(message);
  // return "hi, I am " + userName + ". " + message;
}

// greetUser("max");
// greetUser("John", "Whats Up");

// object example:
// const user = {
//   name: 'John',
//   age 33,
// };

// console.log(user.name)


// more complex object example
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi");
//   }
// }

// const user1 = new User("bob", 55);
// console.log(user1);

// Arrays Example
// const hobbies = ["Sports", "Cooking", "Reading"]
// console.log(hobbies[0]);

// To push a item to a array:
// hobbies.push("WOrkign");
// console.log(hobbies);

// How to find the index of a certain value in the array:
// hobbies.findIndex((item) => {
//   return item === "Sports";
// } )

// Map example:
// const editedHobbies = hobbies.map((item) => item + ";")
// console.log(editedHobbies)

// Array methods, the following examples adds the val: to the front of each number
// function transformToObjects(numberArray) {
//   return numberArray.map((num) => { 
//     let obj = { val: num };
//     console.log(obj);
//     return obj;
//   });
// } 

// Destructure example: remap/change a existing array
// const [firstName, lastName] = ["joseph", "kling"];
// console.log(firstName, lastName);

// Spread operator: Pulls out values from a array and adds them as comma seperated values to another array
// const hobbies = ["sports", "cooking"];
// const newHobbies = ["reading"];
// const mergedHobbies = [...hobbies, ...newHobbies]

// Object example of spread operator:
// const user = {
//   name: "steph",
//   age: 45
// };
// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser)

// Control Structure Example:
// If /else example
// if (10 == 11) {
  
// } else if () {

// } else {

// }

// For example:
// const hobbies = ["hello", "goodbye"];
// for (const hobby of hobbies) {
//   console.log(hobby)
// } 