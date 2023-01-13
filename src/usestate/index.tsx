import { SyntheticEvent, useState } from 'react'
import { InitialStates, useForm } from './useForm'

const UseState = () => {
  const [count, setCount] = useState(0)
  const { states, handleChange, emptyStates } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const [output, setOutput] = useState<InitialStates>({
    name: '',
    email: '',
    password: '',
  })

  return (
    <div>
      <h1>useState Examples</h1>

      <div>
        <h4>Cliché Counter</h4>
        <h2>{count}</h2>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>

      <br />
      <br />

      <form
        onSubmit={(e: SyntheticEvent) => {
          e.preventDefault()

          if (states.name !== '') {
            setOutput(states)

            emptyStates()
          }
        }}
      >
        <h4>Form with custom hook built with useState</h4>
        <input
          type="text"
          name="name"
          placeholder="full name"
          value={states.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={states.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={states.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <p>
        Form output: {output.name} {output.email}
      </p>
      <a href="/">Go home</a>
    </div>
  )
}
export default UseState
