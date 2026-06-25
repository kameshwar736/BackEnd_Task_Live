
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login11 = () => {

    const navigate = useNavigate()

    const [regDetail,setRegDetail] = useState({ userEmail : "" , userPassword : ""})
    

    const handleFrom =(e)=>{
        setRegDetail({...regDetail,[e.target.name]:e.target.value})
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        if( !regDetail.userEmail || !regDetail.userPassword){
            alert("Fill the valid detail")
            return
        }


        const localData = JSON.parse(localStorage.getItem("clientData")) || []

        const checkEmail = localData.find((e,i)=>e.userEmail == regDetail.userEmail && e.userPassword == regDetail.userPassword)

        if(!checkEmail){
            alert("Your Not registered User")
            return
        }


        localStorage.setItem("isActive",JSON.stringify(checkEmail))

        setRegDetail({ userEmail : "" , userPassword : ""})
        alert("Successfully Login")
        navigate('/dash11')
    }



  return (
   <>
   <div>
    <div>
        <h1> Login </h1>
    </div>
    <div>
       <form  onSubmit={handleSubmit}>
         <input type="text" name="userEmail" placeholder='Enter your email' value={regDetail.userEmail} onChange={handleFrom}/>
          <input type="password" name="userPassword" placeholder='Enter your password'  value={regDetail.userPassword} onChange={handleFrom}/>
            <input type="submit" value={"Login"} />
           
       </form>
    </div>
     <button onClick={()=>navigate('/reg11')}>Don't have an Account?</button>
   </div>
   </>
  )
}

export default Login11