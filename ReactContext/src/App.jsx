import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  
  return (
    <>
    <div className='w-1/2 bg-gray-600 mx-auto py-2 px-2'>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
      </div>
    </>
  )
}

export default App
