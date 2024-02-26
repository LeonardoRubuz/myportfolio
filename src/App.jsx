import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'


const router = createBrowserRouter([
  {
    path : "/",
    element :  <Home />
  },
  {
    path : "/get-in-touch",
    element : <Contact />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
