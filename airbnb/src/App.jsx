import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// Importing the components.
import { Navbar } from "./Components/Flexible/Navbar/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar>
      </Navbar>
    </>
  )
}

export default App
