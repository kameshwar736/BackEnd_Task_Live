import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate  = useNavigate()

  const [activeUser,setActiveUSer] = useState({})

  useEffect(()=>{
    const userDetail = JSON.parse(localStorage.getItem("isActive")) 

    if(userDetail){
       setActiveUSer(userDetail)
    console.log(userDetail);

    }else{
      navigate('/reg11')
    } 
  },[])

  const handleLogout =()=>{
    localStorage.removeItem("isActive")
    navigate('/reg11')
  }

  return (
    <>
    <div>
      <div>Dashboard</div>
      <div>
        <h1>Hello {activeUser.userName}</h1>
        <p>user Email : {activeUser.userEmail}</p>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
    </>
  )
}

export default Dashboard