import { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

const UseEffect = () => {
  const getNumFromLocalStorage = () => {
    const numFromLocal = localStorage.getItem('num')
    if (numFromLocal !== 'undefined') {
      if (numFromLocal) {
        const localNum = JSON.parse(numFromLocal)
        return Number(localNum)
      } else {
        return 4
      }
    } else {
      return 4
    }
  }
  const [num, setNum] = useState<number>(() => getNumFromLocalStorage())

  const { data, loading } = useFetch(`http://numbersapi.com/${num}`)

  useEffect(() => {
    localStorage.setItem('num', JSON.stringify(num))
  }, [num, loading])

  return (
    <div>
      <h1>useEffect Examples</h1>

      <h4>Fact about a number</h4>
      <p>{loading ? 'loading...' : data}</p>

      <h5>Increase or decrease number to get a fact</h5>

      <div>
        <button onClick={() => setNum(num + 1)} disabled={loading}>
          +
        </button>
        <button onClick={() => setNum(num - 1)} disabled={loading}>
          -
        </button>
      </div>
    </div>
  )
}

export default UseEffect
