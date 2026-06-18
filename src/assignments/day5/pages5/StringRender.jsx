import React, { useState } from 'react'

const StringRender = () => {


    const [name,setName]=useState("React")


  return (
    <>
    <div className='flex justify-center items-center flex-col mt-10 gap-2'>
        <div>
            <p>{name}</p>
        </div>
        <div>
            <button  onClick={()=>setName("javascript")}>ChangeName</button>
        </div>
    </div>
    </>
  )
}

export default StringRender