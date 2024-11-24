import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"


function App() {
 
const [length, setLength] = useState(8)
const [numberyes, setNumberYes] = useState(false)
const [charateryes, setCharacteryes] = useState(false)
const [password, setPassword] = useState("")
const passwordRef = useRef(null)
const passwordGenerator = useCallback(()=> {
  let pass = "";
  
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberyes) str += "0123456789";
  if(charateryes) str += "!@#$%^&*-_+={}[]~`";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);

    setPassword(pass)
    
  }
  
}, [length, numberyes, charateryes, setPassword])

const copytoClipbard = useCallback(()=>{
  window.navigator.clipboard.writeText(password);
  passwordRef.current?.select();
}, [password])

useEffect(()=>{
  passwordGenerator()
}, [length, numberyes, charateryes, passwordGenerator])

  return (
    <>
    
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-white">
     <h1 className="text-4xl text-center"> Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password} 
          className="outline-none w-full py-3 px-1 text-gray" 
          placeholder="password" 
          readOnly 
          ref={passwordRef}
         
          />
          <button  
          onClick={copytoClipbard}
           className="outline-none bg-orange-800 text-white px-3 py-0.5 shrink-0"> Copy </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{
            setLength(e.target.value);
          }}  />
          <label> Label: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberyes} id="numberinpt" onChange={(e)=>{
            setNumberYes((prev) => !prev)
          }} />
          <label htmlFor="numberinpt"> Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={charateryes} id="characterinput" onChange={(e)=>{
            setCharacteryes((prev) => !prev)
          }} />
          <label htmlFor="characterinput"> Character </label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
