import './App.css'
import { createHashRouter, Link, Outlet, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {

  const router = createHashRouter([{
    children: [
      {element: <Home />, path: '/'},
      {element: <Profile />, path: 'profile'}
    ],
    element: (
      <>
      <div className='main-container'>
        <nav>
          <li><Link to='/'>Home Page</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </nav>
        <Outlet />
      </div>
    </>
    )
  }])

  return <RouterProvider router={router} />
}

export default App
