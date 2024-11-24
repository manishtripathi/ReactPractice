import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue= ()=>{
    setCount(counter => counter + 1)
    setCount(counter => counter + 1)
    setCount(counter => counter + 1)
    setCount(counter => counter + 1)
  }
  const removeValue= ()=>{    
    if(count > 0){
      setCount(count - 1)      
    }else{
      setCount(count)
    }
  }

  return (
    <>
      
      
      <div className="card">
        <p>Added VAlue {count}</p>
        <button onClick={addValue}>Add Value {count}</button>
        <button onClick={removeValue}>Remove Value {count}</button>
      </div>
      
    </>
  )
}

export default App
