import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import UseState from './usestate'
import UseEffect from './useEffect'
import UseLayoutEffect from './useLayoutEffect'
import UseReducer from './useReducer'
import UseRef from './useRef'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <h1>404 Bitch</h1>
        <a href="/">Go home</a>
      </div>
    ),
  },
  {
    path: 'use-state',
    element: <UseState />,
  },
  {
    path: 'use-effect',
    element: <UseEffect />,
  },
  {
    path: 'use-ref',
    element: <UseRef />,
  },
  {
    path: 'use-layout-effect',
    element: <UseLayoutEffect />,
  },
  {
    path: 'use-reducer',
    element: <UseReducer />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
