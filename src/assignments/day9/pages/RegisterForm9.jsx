import React, { useState } from 'react'

const RegisterForm9 = () => {


    const [userData,setUserData] = useState({userName:"" ,userAge :"" ,userCity: ""})
    const [saveData,setSaveData] = useState([])


    const handleChange = (e)=>{
        setUserData({...userData , [e.target.name]: e.target.value})
        console.log(userData);  
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSaveData((prev)=>[...prev,userData])
    }





  return (
  <>
    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name='userName' placeholder='Enter the name'/>
             <input type="text" onChange={handleChange} name='userAge' placeholder='Enter the age'/>
              <input type="text" onChange={handleChange} name='userCity' placeholder='Enter the city' />
              <input type="submit" value="Register"  />
        </form>
    </div>
  </>
  )
}

export default RegisterForm9