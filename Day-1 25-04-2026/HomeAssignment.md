# Homework — React

**Date:** 25-04-2026

---

## 1. What is the difference between a library and a framework?

**Answer:**  
The key difference is **control (Inversion of Control)**.

| Feature      | Library | Framework |
|-------------|---------|-----------|
| Control Flow | Developer controls the flow | Framework controls the flow |
| Usage | Called when needed | Calls your code at specific points |
| Flexibility | More flexible | More structured |
| Scope | Specific functionality | Complete application structure |
| Example | React | Angular |

**Examples:**

- React → Library (focuses on UI layer)
- Angular → Framework (provides full structure including routing, state management, etc.)

---

## 2. What is the difference between Single Page Application (SPA) and Multi Page Application (MPA)?

**Answer:**

**SPA (Single Page Application):**

- Loads a single HTML page
- Updates content dynamically using JavaScript
- No full page reloads

**MPA (Multi Page Application):**

- Loads a new HTML page for each request
- Requires server interaction on each navigation

| Feature         | SPA                   | MPA         |
| --------------- | --------------------- | ----------- |
| Page Reload     | No                    | Yes         |
| Routing         | Client-side           | Server-side |
| Initial Load    | Slower                | Faster      |
| Navigation      | Faster                | Slower      |
| SEO             | Requires optimization | Easier      |
| User Experience | Smooth, app-like      | Traditional |

**Examples:**

- SPA → React, Angular
- MPA → Traditional websites and many e-commerce platforms

---

## 3. What is the current version of React?

**Answer:**  
The current stable version of React is **React 19**.

**Key features:**

- Actions → Simplified form handling and mutations
- `use` hook → Better handling of async data
- Improved Server Components → Better performance
- Less boilerplate → Cleaner and more maintainable code

---

## 4. What are the folder structures in a React project and their use cases?

**Answer:**  
A typical structure inside the `src/` folder:

- `assets/` → Images, fonts, icons, SVGs
- `components/` → Reusable UI components
- `configs/` → App configurations and environment settings
- `hooks/` → Custom reusable hooks
- `context/` → Global state management (Context API)
- `services/` → API calls and external integrations
- `utils/` → Helper/utility functions
- `styles/` → CSS or styling files
- `App.jsx` → Root component of the app
- `main.jsx` → Entry point (renders App to DOM)

**Why this structure?**  
It improves scalability, readability, and maintainability.

---

## 5. What is the difference between Create React App and Vite?

**Answer:**

Both Create React App (CRA) and Vite are tools used to set up React projects, but they differ in performance and architecture.

**Create React App (CRA):**

- Uses Webpack for bundling
- Bundles the entire application before starting
- Slower startup and rebuild times

**Vite:**

- Uses native ES Modules in the browser
- Loads code on demand
- Uses esbuild for very fast development

| Feature       | Create React App (CRA) | Vite               |
| ------------- | ---------------------- | ------------------ |
| Tooling       | Webpack-based          | ES Modules-based   |
| Dev Startup   | Slow                   | Instant            |
| Hot Reload    | Slower                 | Very fast          |
| Build Process | Full bundling          | On-demand bundling |
| Modernity     | Older approach         | Modern tooling     |

**Conclusion:**  
Vite is faster and better suited for modern React development.

---

## 6. What is Reconciliation in React?

**Answer:**

Reconciliation is the process React uses to update the UI efficiently.

When state or props change:

1. React creates a new Virtual DOM
2. Compares it with the previous Virtual DOM
3. Finds the differences
4. Updates only the changed parts in the real DOM

This makes React fast and avoids unnecessary DOM updates.

---

## 7. What is the Diffing Algorithm in React?

**Answer:**

The Diffing Algorithm is the comparison process React uses between the old Virtual DOM and the new Virtual DOM.

It helps React identify:

- What changed
- What stayed the same
- What needs to be updated

Instead of reloading the whole page, React updates only the required elements.

---

## 8. What is Virtual DOM?

**Answer:**

Virtual DOM is a lightweight copy of the real DOM stored in memory.

React uses it because:

- Real DOM updates are slow
- Virtual DOM updates are fast
- It improves performance

React first updates the Virtual DOM, compares it, and then updates the real DOM only where needed.

---

## 9. What are the Rules of JSX?

**Answer:**

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

**Rules of JSX:**

- Return only one parent element
- All tags must be properly closed
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- JavaScript expressions are written inside `{}`
- Inline styles are written as objects
- Attribute names follow camelCase

**Example:**

```jsx
const element = (
  <div className="box">
    <h1>Hello React</h1>
  </div>
)
```

---

## 10. What are Rollup, Roll Down, and esbuild?

**Answer:**

These are tools used in modern JavaScript development for bundling and building applications.

**Rollup:**

- JavaScript module bundler
- Best for libraries and packages
- Produces smaller and cleaner bundles

**Roll Down:**

- A faster next-generation bundler inspired by Rollup
- Designed for better performance
- Still evolving as a modern alternative

**esbuild:**

- Extremely fast JavaScript bundler and minifier
- Written in Go
- Used by Vite for fast development builds

| Tool      | Main Purpose              | Speed        |
| --------- | ------------------------- | ------------ |
| Rollup    | Library bundling          | Fast         |
| Roll Down | Modern faster bundling    | Very Fast    |
| esbuild   | Super-fast build process  | Extremely Fast |

---

