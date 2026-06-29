import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginSP = () => {

    const navigate = useNavigate()

    const [LoginDetail,setLoginDetail] = useState({ userEmail : "" , userPassword : ""})

    const handleChange = (e)=>{
        setLoginDetail({...LoginDetail,[e.target.name]:e.target.value})
    }


    const handleSubmit =(e)=>{
        e.preventDefault()

        

        if(!LoginDetail.userEmail || !LoginDetail.userPassword ){
            alert("Fill the empty Feild")
            return
        }

        const localData = JSON.parse(localStorage.getItem("usersData")) || []

        const validateData = localData.find((e)=>e.userEmail == LoginDetail.userEmail && e.userPassword == LoginDetail.userPassword)

        if(!validateData){
            alert("Your not registered User")
            return
        }

        localStorage.setItem("isActive",JSON.stringify(validateData))
        

        setLoginDetail({userName : "" , userEmail : "" , userPassword : ""})
         alert("Sucessfully registered")

        navigate("/dashSP")


       

    }

  return (
   <>
   <div>Login form</div>
   <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="userEmail" placeholder='Enter the Email' value={LoginDetail.userEmail} onChange={handleChange}/>
        <input type="text" name="userPassword" placeholder='Enter the password' value={LoginDetail.userPassword} onChange={handleChange}/>
        <input type="submit" value={"Login"} />
    </form>
   </div>
   </>
  )
}

export default LoginSP