import { Link } from 'react-router-dom'
import UseEffect from './useEffect'
import UseLayoutEffect from './useLayoutEffect'
import UseReducer from './useReducer'
import UseRef from './useRef'
import UseState from './usestate'

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`use-state`}>useState</Link>
          </li>
          <li>
            <Link to={`use-effect`}>useEffect</Link>
          </li>
          <li>
            <Link to={`use-ref`}>useRef</Link>
          </li>
          <li>
            <Link to={`use-layout-effect`}>useLayoutEffect</Link>
          </li>
          <li>
            <Link to={`use-reducer`}>useReducer</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default App
