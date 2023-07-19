// Import examples
// import { apikey } from "./util";
import apikey from "./util.js";
console.log(apikey);

// arrow function example
// export default (username, message) => {
//   console.log("hello");
//   return username + message;
// };

// Function examples;
function greetUser(userName, message = "Hello") {
  // console.log(userName);
  // console.log(message);
  return "hi, I am " + userName + ". " + message;
}

// greetUser("max");
greetUser("John", "Whats Up");
