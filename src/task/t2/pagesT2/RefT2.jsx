import React, { useRef, useState } from 'react'

const RefT2 = () => {

//     Task 1: Employee Registration Form (useState + useRef)
// Scenario

// HR wants to add employees.

// Requirements

// Fields:
// Employee Name
// Email
// Department
// Features
// Store values using useState
// Use useRef
// After clicking Submit:
// Add employee to table
// Clear all fields
// Focus automatically on Employee Name field


const [saveData,setSaveData] = useState([])

const InputOne = useRef()
const InputTwo = useRef()
const InputThree = useRef()

let  obj = {empName :"" , empEmail : "" , empDepartment : ""}
const handleChange = (e)=>{
    
    obj.empName = InputOne.current.value
    obj.empEmail = InputTwo.current.value
    obj.empDepartment = InputThree.current.value


}

const handleClick = (e)=>{
    e.preventDefault()
    setSaveData([...saveData,obj])    

}

console.log(saveData);






  return (
    <>
    <div>
        <form >
            <input type="text" placeholder='Employee Name' onChange={handleChange} ref={InputOne}/>
             <input type="text" placeholder='Email' onChange={handleChange}  ref={InputTwo}/>
              <input type="text" placeholder='Department' onChange={handleChange} ref={InputThree}/>
              <button onClick={handleClick}>Register</button>
        </form>
    </div>
    </>
  )
}

export default RefT2