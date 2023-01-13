import { useReducer } from 'react'

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind
  payload: number
}

// An interface for our state
interface CountState {
  count: number
}

const counterReducer = (state: CountState, action: CountAction) => {
  const { type, payload } = action
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      }
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      }

    default:
      return state
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })
  console.log(state)

  return (
    <div>
      <h1>useReducer Examples</h1>
      <h4>Counter</h4>
      <p>{state.count}</p>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: CountActionKind.INCREASE,
              payload: 1,
            })
          }}
        >
          Increase by 1
        </button>
        <button
          onClick={() => {
            dispatch({
              type: CountActionKind.DECREASE,
              payload: 1,
            })
          }}
        >
          Decrease by 1
        </button>
      </div>
    </div>
  )
}
export default UseReducer
