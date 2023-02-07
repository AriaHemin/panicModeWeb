import { useState } from 'react'
import './App.css'
import StartMenu from './pages/startMenu'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <StartMenu/>
    </div>
  )
}

export default App
