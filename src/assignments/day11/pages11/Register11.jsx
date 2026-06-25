
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register11 = () => {

    const navigate = useNavigate()

    const [regDetail,setRegDetail] = useState({userName : "" , userEmail : "" , userPassword : ""})
    const [tempPassword , setTempPassword] = useState("")

    const gotoLogin = ()=>{
        navigate('/log11')
    }

    const handleFrom =(e)=>{
        setRegDetail({...regDetail,[e.target.name]:e.target.value})
    }

    const handleTempPass =(e)=>{
        setTempPassword(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!regDetail.userName || !regDetail.userEmail || !regDetail.userPassword){
            alert("Fill the valid detail")
            return
        }

        if(regDetail.userPassword !== tempPassword){
            alert("Check the password")
        }

        const localData = JSON.parse(localStorage.getItem("clientData")) || []

        const checkEmail = localData.find((e,i)=>e.userEmail == regDetail.userEmail)

        if(checkEmail){
            alert("This Email is alreasy been used")
            return
        }

        localData.push(regDetail)

        localStorage.setItem("clientData",JSON.stringify(localData))

        setRegDetail({userName : "" , userEmail : "" , userPassword : ""})
        setTempPassword("")
        alert("Successfully Registered")
        navigate('/log11')
    }



  return (
   <>
   <div>
    <div>
        <h1>Register Form </h1>
    </div>
    <div>
       <form  onSubmit={handleSubmit}>
         <input type="text" name="userName" placeholder='Enter your name' value={regDetail.userName} onChange={handleFrom} />
         <input type="text" name="userEmail" placeholder='Enter your email' value={regDetail.userEmail} onChange={handleFrom}/>
          <input type="password" name="userPassword" placeholder='Enter your password'  value={regDetail.userPassword} onChange={handleFrom}/>
           <input type="password"  placeholder='Re Enter your password' value={tempPassword} onChange={handleTempPass}/>
            <input type="submit" value={"Register"} />
           
       </form>
    </div>
      <button onClick={gotoLogin}>Already have an account?</button>
   </div>
   </>
  )
}

export default Register11