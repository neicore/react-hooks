import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../useEffect/useFetch'
import { useMeasure } from './useMeasure'

const UseLayoutEffect = () => {
  const getNumFromLocalStorage = () => {
    const numFromLocal = localStorage?.getItem('num')

    if (numFromLocal !== 'undefined' && numFromLocal) {
      return Number(JSON.parse(numFromLocal))
    }

    return 4
  }

  const [num, setNum] = useState<number>(() => getNumFromLocalStorage())
  const { data, loading } = useFetch(`http://numbersapi.com/${num}`)

  const { rect, ref } = useMeasure([data])

  useEffect(() => {
    localStorage.setItem('num', JSON.stringify(num))
  }, [num, loading])

  return (
    <div>
      <h1>useLayoutEffect Example</h1>

      <h4>Example</h4>
      <h4>Fact about a number</h4>
      <div style={{ display: 'flex' }}>
        <p ref={ref}>{loading ? 'loading...' : data}</p>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>

      <h5>Increase or decrease number to get a fact</h5>

      <div>
        <button onClick={() => setNum(num + 1)} disabled={loading}>
          +
        </button>
        <button onClick={() => setNum(num - 1)} disabled={loading}>
          -
        </button>
      </div>
      <a href="/">Go home</a>
    </div>
  )
}
export default UseLayoutEffect
