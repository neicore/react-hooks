import { useRef, useState } from 'react'

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [value, setValue] = useState({ username: '', password: '' })
  const rerenders = useRef(0)

  return (
    <div>
      <h1>useRef Examples</h1>
      <h4>DOM node reference example</h4>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={value.username}
          onChange={(e) =>
            setValue({ username: e.target.value, password: value.password })
          }
          ref={inputRef}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={value.password}
          onChange={(e) =>
            setValue({ username: value.username, password: e.target.value })
          }
        />

        <button
          onClick={(e) => {
            e.preventDefault()
            inputRef.current?.focus()
          }}
        >
          focus
        </button>
      </form>

      <br />
      <br />

      <h4>Count rerenders: {rerenders.current++}</h4>
      <a href="/">Go home</a>
    </div>
  )
}
export default UseRef
