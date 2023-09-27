import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Home({setCreate}) {


 function  handleCreate(){
      setCreate(false)
      console.log("jhhvj")
  }
	return (
		<div>
    <h1 className='title mt-8'>
      Invoice Creator
    </h1>
    <div className='container'>
    <div className='form'>
    <div className='inputs'>
    <input className='placeholder:text-neutral-400 px-2 ' type="text" placeholder="Company Name"  onChange={e=>e.target.value}/>

    <input className='placeholder:text-neutral-400 px-2' type="text" placeholder="Generate Invoice Number"  onChange={e=>e.target.value}/>
     <Link to ="/invoice"> <button onClick={handleCreate}  className='bg-blue-500 px-4 text-white rounded-sm hover:bg-blue-400 ' >Create</button></Link>
      
    </div>
      
    </div>
      
    </div>
    </div>
			)
}

export default Home