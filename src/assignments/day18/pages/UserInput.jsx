import React, { useContext } from 'react'
import InputContext from '../context/InputContext'

const UserInput = () => {

    const{userData,handleChange,handleAdd}=useContext(InputContext)
   
    

  return (
    <>
    <input type="text" placeholder='Enter the value' ref={userData} onChange={handleChange}/>
    <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default UserInput