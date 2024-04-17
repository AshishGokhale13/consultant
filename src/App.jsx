import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './component/admin/Admin'
import Regestration from './component/register/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/register" element={<Regestration/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
