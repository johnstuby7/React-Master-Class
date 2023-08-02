# Good to know

- What is react and why use it: React provides state-of-the-art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework. Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages.

- Creating a react project: npx create-react-app my-app.

  - Ensure that nodejs is installed
  - you can also use npm create vite
  - cd into project
  - npm i
  - npm run start
  - ensure site loads correctly

- Alternative to function keyword: const App = () => { instead of function App() {}
- What is UseState Hook: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it.
- USESTATE:

  - You have seperate states even if you create a component more then once
  - const [title, setTitle] = useState(props.title); First element is the current value, the scond value is a function to update the state of the field
  - he map() function lets you manipulate the items in an array by iterating and accessing individual items. In this guide, you will learn how to use the map() function and export it.
  - += can be used as a shortcut to add to a existing array like so:

  ```
  for (const expense in props.expense) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 (january is 0)
    chartDataPoints(expenseMonth).value += expense.amount;
  }
  ```

- Converting dataPoint Object to be a number to be used for the chart logic:

  ```
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(props.Data);
  ```

- css Modules:https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
- Using Breakpoints: goto dev tools in chrome/source/user/src/pick your specifc file, add a breakpoint(click on the specific line) and then go through a action on the webpage. This will cause the application to pause on that line and step through each next step on the user click, good for giving us information from each step to help us debug
- To help debugging, get the React DevTools extension for a browser, this gives us a extra bit of information about our react app

- Custom Hooks: Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.

- React Hooks: are simple JavaScript functions that we can use to isolate the reusable part from a functional component. UseState(), useEffect(). start with "use".

- Building code for production: npm run build creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files. Each filename inside of build/static will contain a unique hash of the file contents.

- Local State: state that belongs to a single component, example: listens to user input for a input field toggling show more details field. Should be managed component internal with useState() / use Reducer
- Cross Component State: state that affects multiple components. EX: open/closed state of a modal overlay. requries props chains/ prop drilling
- App wide state: State that affects the entire app(most/all components). ex: use auth status. Requires Prop chains/prop drilling

-ONCHANGE: If you are creating a handler that is watching user data you will need to do the following:
userInput.js

```
const inputChangeHandler = (input, value) => {};
<input
            onChange={() => inputChangeHandler()} >
```

- To ensure that input that is a string but should be used as number, do the following: +enteredAge

- jsx limiations: you can only return one root element, the solution to this is to wrap what you want to return in a div:

```
return (
  <div>
    <h2>
      Hi THere!
    </h2>
    <p>This does work</p>
  </div>
)
```

- React Portals: Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
  ```
  ReactDOM.createPortal(child, container)
  ```
  - The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

## next

- What is nextJs: a fullstack framework for reactJs. solves common problems and makes building react apps easier. has routing. we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.
  -Key Features:
  - File based routing: define pages and routers with files and folders instead of code. less code, less work, highly understandable
  - Server side rendering: Automatic page pre-rendering: great for SEO and initial load. Blending client and server side. Fetch data on the server and render finished pages
  - Fullstack capabilities: easily add backend code to your next/react apps. Storing data, getting data, authentication, etc can be added to app

## Routing:

- Route is the conditionally shown component that renders some UI when its path matches the current URL. Link: Link component is used to create links to different routes and implement navigation around the application.
- When building complex user interfaces, we typically build single page applications. only one initial html request and response. Page(URL) changes are then handled by client side (React) code(changes the visible content without fetching a new html page.)

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
- Custom Hooks: Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.
- React Hooks: are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
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

- useReducer(): the useReducer Hook accepts two arguments.The useReducer Hook returns the current stateand a dispatchmethod. should be
- used when useState becomes cumbersome.should be used if you have related pieces of state/data, for more complex state updates.
  useReducer(<reducer>, <initialState>)
  -useState() : should be used for the mian state management tool, great for independent pieces of state/data, better if state updates are easy and limited to a few kinds of updates

  - Reduce method: allows us to transform a array into a single value, in this case a number

  ```
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  ```

  - React.memo: This is one way to help prevent unnecessary re-evaluations. React.mom should look at a component as a argument, look at the props, compare the previous with new values of props, and only if a change has occured, then the demoOutput will be run, otherwise it will be skipped

  ```
  export default React.memo(DemoOutput);
  ```

  - useCallback() allows you to save a function so you can reuse it

# Notes:

- For components it should be CamelCase
- custom made elements will be uppercase like <ExpenseItem></ExpenseItem> normal tags will be lowercase <p></p>
- axios is considered a good choice for http requests.
- Fetch API is built into browsers and allows us to fetch/send http requests

## Creating react projects: browser based vs local Development

### To create a new react project:

- ensure node is installed
- npx create-react-app react-complete-guide
- cd react-complete-guide
- npm start

# Testing:

- Manual testing: Writing code <> Preview and test in browser
- Automated Testing: tests for your code, tests individual building blocks of your app. There are three kinds of automated tests:
  - Unit tests: Test the individual building blocks(functions, componnents) in isolation, most common kind of test
  - Integration Tests: tests combination of multiple building blocks, a couple tests overall
  - End-to-end Tests: tests complete scenarios in app as a user would experience them, limited but important
- What to test: Test the different building blocks, unit tests: the smallest building blocks that make up your app. Ensure to test both
  success and failure cases.

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

## Outputting conditional logic:

- Clicking on the delete button will cause a card with text and a button to show up, clicking the proceed button will cause the
- conditional to be triggered and the card to disappear.
  App.js

```
import React, {useState} from 'react';

// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);

    function deleteHandler() {
     setIsDeleting(true)
    }

    function proceedHandler() {
     setIsDeleting(false)
    }


    return (
      <div>

        {isDeleting && <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>}
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
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

#alert {
    margin: 3rem auto;
    padding: 1rem;
    width: 15rem;
    border: 2px solid #dd3562;
    background-color: #776167;
    color: white;
}

#alert button {
    font: inherit;
    border: none;
    padding: 0.5rem 1.5rem;
    background-color: transparent;
    color: #540218;
}
```

## Dynamic styles example: clicking button updates color of label:

```
    import React from 'react';

    // don't change the Component name "App"
    export default function App() {
        const [highlighted, setHighlighted] = React.useState(false);

        function clickHandler() {
            setHighlighted(isHighlighted => !isHighlighted);
        }

        return (
            <div>
                <p style={{color: highlighted ? 'red' : 'white'}}>Style me!</p>
                <button onClick={clickHandler}>Toggle style</button>
            </div>
        );
    }
```

## Example of Dynamically add class css:

```
    import React from 'react';

    // don't change the Component name "App"
    export default function App() {
        const [highlighted, setHighlighted] = React.useState(false);

        function clickHandler() {
            setHighlighted(isHighlighted => !isHighlighted);
        }

        return (
            <div>
                <p className={highlighted ? 'active' : ''}>Style me!</p>
                <button onClick={clickHandler}>Toggle style</button>
            </div>
        );
    }
```

## Two Way Data binding for input fields:

- For two way data binding to work you need to have the following:
  - ChangeHandler: Something that watches when a input field is interacted with const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit");
    };
  - State object for handling the initial value and the change event. const [userInput, setUserInput] = useState(initialUserInput);
  - data (initialUserInput)

User Input:

```
import React, { useState } from "react";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1000,
  "expected-return": 7,
  duration: 10,
};

const UserInput = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  // button type of submit will trigger the onsubmit action and call this handler
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  // [input ] will compare the input field name(current savings, etc) and cmpare it to value
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;

```
