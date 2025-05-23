import './App.css'
import { createHashRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AvatarIcon from './components/AvatarIcon'

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
          <AvatarIcon />
        </nav>
        <Outlet />
      </div>
    </>
    )
  }])

  return <RouterProvider router={router} />
}

export default App
