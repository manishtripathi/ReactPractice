import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Test/>
      <h1>React First Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
