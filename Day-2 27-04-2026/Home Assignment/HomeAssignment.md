# Homework — React Components

**Date:** 27-04-2026

---

## 1. What is the difference between Class Based Components and Function Based Components?

**Answer:**

Both are used to create UI in React, but they differ in syntax, state handling, and lifecycle management.

| Feature | Class Based Components | Function Based Components |
|--------|------------------------|---------------------------|
| Syntax | Uses ES6 classes | Uses JavaScript functions |
| State Management | Uses `this.state` | Uses `useState()` Hook |
| Lifecycle Methods | Uses methods like `componentDidMount()` | Uses `useEffect()` Hook |
| `this` Keyword | Required | Not required |
| Code Length | More verbose | Short and simple |
| Performance | Slightly heavier | Lighter and faster |
| Modern Usage | Less preferred now | Preferred in modern React |

**Example of Class Component:**

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello from Class Component</h1>;
  }
}

export default Welcome;
```

**Example of Function Component:**

```jsx
function Welcome() {
  return <h1>Hello from Function Component</h1>;
}

export default Welcome;
```

**Conclusion:**  
Function components are preferred in modern React because they are simpler, cleaner, and support Hooks.

---

## 2. What is `useState()`? What is its use?

**Answer:**

`useState()` is a React Hook used to create and manage state in function components.

Before Hooks, state was only available in class components. With `useState()`, function components can also store and update dynamic data.

### Syntax

```jsx
const [state, setState] = useState(initialValue)
```

### Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

### Uses of `useState()`

- To store dynamic values
- To update UI when data changes
- To handle form inputs
- To manage counters, toggles, and user interactions
- To control component re-rendering

### Common Examples

- Counter App
- Login Form
- Show/Hide Password
- Toggle Dark Mode
- Shopping Cart Count

**Conclusion:**  
`useState()` helps function components manage changing data and makes the UI interactive.

---