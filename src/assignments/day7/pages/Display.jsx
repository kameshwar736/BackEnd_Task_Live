import React, { useState } from 'react'

const Display = () => {

    const [name,setName] = useState("")
     const [empName,setEmpName] = useState("")
      const [age,setAge] = useState("")

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleEmpName = (e)=>{
        setEmpName(e.target.value)
    }

    const handleAge = (e)=>{
        setAge(e.target.value)
    }
  return (
    <>
        <div className='bg-black flex flex-col justify-center items-center text-white p-10 gap-5' >
            <h1>Task 1 - Student Name Input Create an input field using useState(). Display the entered student name below the input.</h1>
             <input type="text" placeholder='Enter the Name' onChange={handleName} className='bg-white text-black p-2'/>
             <p>{name}</p>
        </div>
        <br />
        <div className='bg-black flex flex-col justify-center items-center text-white p-10 gap-5' >
              <h1>Task 2 - Employee Name Form Create an employee name input and show the typed value in real-time.</h1>
             <input type="text" placeholder='Enter the EMployee Name' onChange={handleEmpName} className='bg-white text-black p-2'/>
             <p>{empName}</p>
        </div>
        <br />
         <div className='bg-black flex flex-col justify-center items-center text-white p-10 gap-5' >
              <h1>Task 3 - Age Input Accept age from the user and display it dynamically using state..</h1>
             <input type="number" placeholder='Enter the EMployee Name' onChange={handleAge} className='bg-white text-black p-2'/>
             <p>Age : {age}</p>
        </div>
    </>
  )
}

export default Display