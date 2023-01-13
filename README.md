# React Hooks Basics

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

## useEffect

This hook gets called everytime a component renders / rerenders. It takes two arguments, the first is an anonymous function where you can put in all the code you want to be executed whenever the component rerenders and the second argument is a depencency array which will cause the hook to be called whenever the values passed change. You can have more than once `useEffect` in a component and they will fire off in order.

### Syntax examples

Can be used without a dependency array

```JSX
useEffect(() => {
    //code to be executed whenever the component rerenders
})
```

Can be used with an empty dependency array

```JSX
useEffect(() => {
    //code to be executed just once
}, [])
```

With dependency array

```JSX
useEffect(() => {
    //code to be executed whenever the component rerenders because value1 or value2 changed
}, [value1, value2])
```

`useEffect` can also return a clean up function which can be used to clean up the values when the component unmounts

```JSX
useEffect(() => {
    //code to be executed whenever the component rerenders because value1 changed

    return () => {
        // code to clean up values after component unmounts
    }
}, [value])
```

## useRef

`useRef` hook allows to persist values between renders. Can store a mutable value that does not cause a re-render when updated. It can access the DOM directly and can be used to store a reference to a DOM node.

### Syntax Examples

```TSX
const ref = useRef(1) // initial value is a number
const reference = useRef('name') // initial value is a string
const inputRef = useRef<HTMLInputElement>(null) // initial value is null
```

### A use case

Another use case is solving an issue of updating state when component has unmounted. With `useRef`, you can check if the component is still there and then execute the state update.

```JSX
const isCurrent = useRef(true)

useEffect(() => {
    return () => isCurrent.current = false
}, [])

if(isCurrent.current){
    //logic for setting state goes here
}
```

## useLayoutEffect

This runs synchronously immediately after React has performed all DOM mutations. This can be useful if you need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating state.

Your code runs immediately after the DOM has been updated, but before the browser has had a chance to "paint" those changes (the user doesn't actually see the updates until after the browser has repainted)

It's similar to useEffect where it can have a dependency array which can be empty to make the hook run only once or take a value or values which will cause the hook to run everytime they change. The hook can also not have a dependency array which will mean that it will get called whenever the component render.

### Syntax Examples

```JSX
useLayoutEffect(() => {}, [])
```

## useCallback

A hook that lets you cache a function definition between re-renders.

```JSX
const cachedFn = useCallback(fn, dependencies)
```

### Parameters

`fn`: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On subsequent renders, React will give you the same function again if the `dependencies` have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.

`dependencies`: The list of all reactive values referenced inside of the `fn` code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. The list of `dependencies` must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the `Object.is` comparison algorithm.