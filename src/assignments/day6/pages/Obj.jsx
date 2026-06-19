import React, { useState } from 'react'

const Obj = () => {

  const [user, setUser] = useState({
    id: 1,
    name: "Kameshwar",
    age: 20,
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    address: {
      city: "Chennai",
      state: "Tamilnadu",
      pincode: 600001
    }
})

  return (
    <>
      <div  className='flex justify-center items-center flex-col p-10'>
        <div className='p-10 text-2xl font-medium text-400' ><h1>User Detail</h1></div>
        <div>
          <ul className='flex flex-col gap-1'>
            <li>Name : {user.name}</li>
            <li>Age : {user.age}</li>
            <li>isActive : {user.isActive}</li>
            <li >Skill : {user.skills.map((e,i)=>(<span key={i}>{e}</span>))}</li>
            <li>Address : {user.address.city}</li>
          </ul>
        </div>
      </div>
    
    </>
  )
}

export default Obj