import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardSp = () => {

    const navigate = useNavigate()

    const [activeUSer,setActiveUser] = useState([])

    useEffect(()=>{
         const localData = JSON.parse(localStorage.getItem("isActive")) || []
         setActiveUser(localData)
    },[])

    console.log(activeUSer);

    const logout = (e)=>{
        e.preventDefault()
        localStorage.removeItem("isActive")
        navigate('/studentSp')
        
    }
    


  return (
   <>
   <div>
    <div>
        <h1>DashboardSp</h1>
    </div>
    <div>
        <h1>hello {activeUSer.userName}</h1>
        <p>mail id : {activeUSer.userEmail}</p>
    </div>
    <div>
        <button onClick={logout}>Logout</button>
    </div>
   </div>

   </>
  )
}

export default DashboardSp