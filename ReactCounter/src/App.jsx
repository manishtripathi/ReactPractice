import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(5)
  //let Counter = 15

  const addValue = () =>{
    
    Counter = Counter + 1
    console.log("Clicked Value", Counter + 1)
    setCounter(Counter)
  }
  const removeValue = () =>{
    
    if(Counter > 0){
      Counter = Counter -1;
    setCounter(Counter)
    }
  }

  return (
    <>
     <h1> Tut50 and React</h1>
     <h2> Counter Value : {Counter}</h2>
     <button onClick={addValue}>Add Value {Counter} </button>
     <button onClick={removeValue}>Remove Value {Counter}</button>
     <p>value : {Counter}</p>
    </>
  )
}

export default App
