import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StudentReg = () => {

    const navigate = useNavigate()

    const [registerDetail,setRegisterDetail] = useState({userName : "" , userEmail : "" , userPassword : ""})

    const handleChange = (e)=>{
        setRegisterDetail({...registerDetail,[e.target.name]:e.target.value})
    }


    const handleSubmit =(e)=>{
        e.preventDefault()

        if(!registerDetail.userEmail || !registerDetail.userName || !registerDetail.userPassword ){
            alert("Fill the empty Feild")
            return
        }

        const localData = JSON.parse(localStorage.getItem("usersData")) || []
        
         console.log(localData.userEmail);
        console.log(registerDetail.userEmail);
        
        if(localData.userEmail == registerDetail.userEmail){
            alert("This Email is alreday been used")
            return
        }

        localData.push(registerDetail)

        localStorage.setItem("usersData",JSON.stringify(localData))
        setRegisterDetail({userName : "" , userEmail : "" , userPassword : ""})
        
        alert("Sucessfully registered")
        navigate("/loginSp")

    }

  return (
   <>
   <div>
    <h1>Register Form</h1>
   </div>
   <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder='Enter the Name' value={registerDetail.userName}  onChange={handleChange}/>
        <input type="text" name="userEmail" placeholder='Enter the Email' value={registerDetail.userEmail} onChange={handleChange}/>
        <input type="text" name="userPassword" placeholder='Enter the password' value={registerDetail.userPassword} onChange={handleChange}/>
        <input type="submit" value={"Register"} />
    </form>
   </div>
   </>
  )
}

export default StudentReg