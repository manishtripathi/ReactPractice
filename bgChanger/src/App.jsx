import { useState } from 'react'

function App() {
 const [color, setColor] = useState(localStorage.getItem(("backgroundColor") || "olive"))

  return (
    <>
     <div className='w-full h-screen duration-200 bg-olive' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'> 
              <button onClick={()=> {
                setColor("red");
                localStorage.setItem("backgroundColor", "red");
              }

              } className='outline-none px-4 rounded-full py-2 text-white' style={{backgroundColor: "red"}}> Red </button>
              <button onClick={()=> {
                setColor("green");
                localStorage.setItem("backgroundColor", "green");
              }

              } className='outline-none px-4 rounded-full py-2 text-white' style={{backgroundColor: "green"}}> Green </button>
              <button onClick={()=> {
                setColor("blue");
                localStorage.setItem("backgroundColor", "blue");
              }

              } className='outline-none px-4 rounded-full py-2 text-white' style={{backgroundColor: "blue"}}> Blue </button>
              <button onClick={()=> {
                setColor("yellow");
                localStorage.setItem("backgroundColor", "yellow");
              }

              } className='outline-none px-4 rounded-full py-2 text-white' style={{backgroundColor: "yellow"}}> Yellow </button>
              <button onClick={()=> {
                setColor("purple");
                localStorage.setItem("backgroundColor", "purple");
              }

              } className='outline-none px-4 rounded-full py-2 text-white' style={{backgroundColor: "purple"}}> Purple </button>
              <button onClick={()=> {
                setColor("orange");
                localStorage.setItem("backgroundColor", "orange");
              }

              } className='outline-none px-4 rounded-full py-2 text-white' style={{backgroundColor: "orange"}}> Orange </button>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
