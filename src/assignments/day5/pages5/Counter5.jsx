import React, { useState } from 'react'

const Counter = () => {

  const [value,setValue] = useState(0)


  return (
   <>
   
   <div className='bg-amber-50 p-10 flex flex-col justify-center items-center h-screen gap-10'>
    <div className='text-5xl font-bold'>{value}</div>
    <div className='flex gap-5'>
        <button  className='bg-green-600 p-1 font-medium rounded w-30 cursor-pointer ' onClick={()=>setValue(value+1)}>Increase</button>
        <button  className='bg-red-600 p-1 font-medium rounded w-30 cursor-pointer ' onClick={()=>setValue(value-1)}>Decrease</button>
        <button  className='bg-amber-400 p-1 font-medium rounded w-30 cursor-pointer ' onClick={()=>setValue(0)}>Reset</button>
    </div>
   </div>
   
   </>
  )
}

export default Counter