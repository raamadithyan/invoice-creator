import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Templete from './pdf/Templete'
import Home from './Home'

function App() {
    const [create, setCreate] = useState(true)


  return (
    <>

    {create ? (                    
      <Home setCreate={setCreate}/> ):(  

      
    
    
    <Templete setCreate={setCreate}/>
    )}

 

    </>
  )
}

export default App
