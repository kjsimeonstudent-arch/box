import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div id="root">
        <div className="header">
            <h1>Ken-zhin Simeon</h1>
            <div id="rectangle">PEITEL</div>
        </div>
    </div>
  )
}

export default App
