# Good to know

# Terminology:

- Constants: Work like variables, but must not be reassigned
- Variable: base data value. If you use var outside of a function, it belongs to the global scope. If you use var inside of a function, it belongs to that function
- Operators: Operators are used to performing specific mathematical and logical computations on operands
- Function: A React functional component is a simple JavaScript function that accepts props and returns a React element.
- Parameter: React parameters are used in React routing, where we have parameters we need to access in the route. For example, if we had a route such as <Route path=”/:id” /> we could access that particular string or value in the route by calling the useParams hook. let { id } = useParams();
- Arrow Function: The arrow function is basically an anonymous function which accepts a fixed number or arguments, and operates in the context of the enclosing scope.

# Notes:

## Creating react projects: browser based vs local Development

### To create a new react project:

- ensure node is installed
- npx create-react-app react-complete-guide
- cd react-complete-guide
- npm start

# Examples:

## Arrow function:

```
// arrow function example
<!-- // export default (username, message) => {
//   console.log("hello");
//   return username + message;
// }; -->
```
