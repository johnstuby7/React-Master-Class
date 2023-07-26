# Good to know

- Alternative to function keyword: const App = () => { instead of function App() {}
- What is UseState Hook: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it.
- USESTATE:
  - You have seperate states even if you create a component more then once
  - const [title, setTitle] = useState(props.title); First element is the current value, the scond value is a function to update the state of the field
  - he map() function lets you manipulate the items in an array by iterating and accessing individual items. In this guide, you will learn how to use the map() function and export it.

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
- Composition: is a development pattern based on React's original component model where we build components from other components using explicit defined props or the implicit children prop
- State: The state is a built-in React object that is used to contain data or information about the component.
  - Whenever you update your state and you depend on the previous state, dont use ...userInput, instead use
  ```
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  ```
  - this will ensure that it will always be the latest state snapshot. So you are always operating on the latest state snapshot.
- Event Listener: An event listener in JavaScript is a way that you can wait for user interaction like a click or keypress and then run some code whenever that action happens.
- Two way data binding: Two-way data binding allows bidirectional data flow, meaning that changes in the UI automatically update the component's state, and changes in the state automatically update the UI.
- keys: A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted.
- tertiary conditional:
  ```
  {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
  ```

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

## React.createElement example

Instead of doing:

```
   return (
     <div>
       <h2>Let's get started!</h2>
       <Expenses items={expenses} />
     </div>
   );
```

you can instead do:

```
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );
```

## Listening to events and event handlers:

- onClick uses a function to perform a action
- OnClick is a event listener, the clickhandler is a event that is triggered on button click, we are able to listen to the event being triggered

```
function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
```

## Example of UseState functionality:

- The following example will update the value of the title on button click, it does this with the useState function, the first value is
- the current value of title and the second value is the function that is used to update the state of title.
- You have seperate states even if you create a component more then once

```
import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // function ExpenseItem(props) {

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;


```

## form input basic example:

```
import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```

## Example of Button increment counter:

```
import React, {useState} from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [counter, setCounter] = React.useState(0)

    function incrementCountHandler() {
        setCounter(prevCounter => prevCounter + 1);
    }
    return (
      <div>
        <p id="counter" >{counter}</p>
        <button onClick={incrementCountHandler}>Increment</button>
      </div>
    );
}
```

## Rendering lists of Data:

Exercise: Rendering Lists of Data

You're working on a "Todo List" web app and your task is to output a list of dummy todo items dynamically. For this task, a Todo component has been prepared for you, though you must still add some code to it to receive and output the todo text.
App.js

```
    import React from 'react';

    import Todo from './Todo';
    import './styles.css';

    const DUMMY_TODOS = [
        'Learn React',
        'Practice React',
        'Profit!'
    ];

    // don't change the Component name "App"
    export default function App() {
        return (
            <ul>
              {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
            </ul>
        );
    }
```

Todo.js

```
    import React from 'react';

    export default function Todo(props) {
        return <li>{props.text}</li>;
    }
```

styles.css

```
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
    text-align: center;
}

li {
    list-style: none;
    margin: 1rem;
    padding: 1rem;
    background-color: #444047;
    color: #b2adad;
    border: 2px solid #8567fd;
}
```
