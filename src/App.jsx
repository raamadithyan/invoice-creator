import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 import { Routes,Route } from 'react-router-dom'

import Templete from './pdf/Templete'
import Home from './Home'

function App() {
    const [create, setCreate] = useState(true)


  return (
    <>
<Routes>

    {create ? (                    
      <Route path="/" element={<Home setCreate={setCreate}/>} />  ):(  

      
    
    
    <Route path='/invoice' element={<Templete setCreate={setCreate}/>}/>
    )}

 
</Routes>

    </>
  )
}

export default App
