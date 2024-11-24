import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodos'
import Todos from './Components/Todos'
import { Provider } from 'react-redux'
import { store } from './App/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
