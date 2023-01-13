import { Link } from 'react-router-dom'

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
