import React, { useReducer, useState } from 'react'
import Login from './Login'

const initail = []

const reduce = (state,action)=>{

    switch(action.type){
        case "ADD" :
            alert("Sucessfully Register")
            return  [...initail,action.payload]
    }

    
}

const Register = () => {

    const [newUser,diapatch] = useReducer(reduce,initail)

    const [formData,setFormData] = useState({userName : "" , userEmail : "" , userPassword : "" })

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const unique = {userId : Date.now() , ...formData}
        
        diapatch({
            type : "ADD",
            payload : unique
        })
    }


        

    
  return (
   <>
   <h1>Register</h1>
   <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter The name' onChange={handleChange} name='userName'/>
        <input type="text" placeholder='Enter The Email' onChange={handleChange} name='userEmail'/>
        <input type="text" placeholder='Enter The password' onChange={handleChange} name='userPassword'/>
        <input type="submit" value="Register" />
   </form>

    <Login data = {newUser}/>

   
   </>
  )
}

export default Register