import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const LocalStorageHook = () => {

    const {saveUserFunc} = useLocalStorage("Sla")

      const [userSla,setUserSla] = useState({userName : "",userMobile : ""})

    const handleChange = (e)=>{
        setUserSla({...userSla,[e.target.name]:e.target.value})
        console.log(userSla);
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        saveUserFunc(userSla)
        setUserSla({userName : "",userMobile : ""})
    }

    



  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter the name'  onChange={handleChange} name='userName'/>
            <input type="tel" placeholder='Enter the mobile' onChange={handleChange} name='userMobile'/>
            <input type="submit" value="Register" />
        </form>
    </div>
    
    </>
  )
}

export default LocalStorageHook