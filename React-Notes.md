# Good to know

# Terminology:

- Constants: Work like variables, but must not be reassigned
- Variable: base data value. If you use var outside of a function, it belongs to the global scope. If you use var inside of a function, it belongs to that function
- Operators: Operators are used to performing specific mathematical and logical computations on operands
- Function: A React functional component is a simple JavaScript function that accepts props and returns a React element.
- Parameter: React parameters are used in React routing, where we have parameters we need to access in the route. For example, if we had a route such as <Route path=”/:id” /> we could access that particular string or value in the route by calling the useParams hook. let { id } = useParams();
- Arrow Function: The arrow function is basically an anonymous function which accepts a fixed number or arguments, and operates in the context of the enclosing scope.
- Spread operator: Pulls out values from a array and adds them as comma seperated values to another array
- Primitive Values: String, number, bigint, boolean, undefined, symbol, and null are the seven primitive data types
- Reference values: objects are considered reference values.
- Components: are independent and reusable bits of code.
- Declarative Approach: we describe the final UI we want for each scene. We may structure the component differently
- Props: Props are arguments passed into React components.

# Notes:

- For components it should be CamelCase
- custom made elements will be uppercase like <ExpenseItem></ExpenseItem> normal tags will be lowercase <p></p>

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

## Props examples:

In app.js we have defined a array of values, since we have the <expenseItem> in app, and it is passing values to it, as long
as in the expenseItem file we ensure that the function accepts props, then the expense item will be able to use all the
data passed to it

App.js:

```
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

```

ExpenseItem.js:

```
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

```

### Different ways of using props:

You can instead just call all the data for a specific element like so:
expenses[0]

or in the recieving file, you can pass it the props you want it to use like so:
function ExpenseItem(date, price, title)
