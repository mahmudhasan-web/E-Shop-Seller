
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { useContext } from 'react'
import { ContextSource } from './Components/ContextAPI/ContextAPI'

function App() {
  // const data = useContext(ContextSource)
  // console.log(data);
  

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  )
}

export default App
