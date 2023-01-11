# React Hooks

Learning react hooks with practice. This read me is dedicated to my future self. I know you are here because you took one week break from coding and now you have forgotten everything.

### What are hooks

Fuctions that let you "hook" into react state in functional components

### Rules of writing hooks

- Don't call hooks inside loops, conditions, or nested functions. React won't be able to preserve the state of hooks between multuple `useState` and `useEffect` calls

- Don't call hooks inside regular js functions. React functional components and custom components are allowed.

## useState

`useState` hook is used to manage state within a functional component. The `useState` function takes an initial state as the argument and then returns an array of the state and a function that can be used to update that state. The initial state can be null, number, string, array, object, etc.

### Syntax examples

```JSX
const arr = useState()
```

Most people prefers to destructure the returned array.

```JSX
const [value, setValue] = useState() // initial state is null
const [word, setWord] = useState('') //  initial state is an empty string
const [numb, setNumb] = useState(5) // initial state is a number
const [sithLord, setSithLord] = useState({name: 'Darth Vader', age: 44}) // initial state is an object
```

If you have an initial state that requires an expensive computation, you can call a function that returns your initial state as the argument in `useState`.

```JSX
import { useState } from "react"

const myFunctionalComponent = (props) => {
    const expensiveComputation = (argValue) => {
        // Does some expensive computation and then returns the initial state value
    }

    const [value, setValue] = useState(() => expensiveComputation(props.argValue))
}
```
