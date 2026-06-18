import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeTask5 = () => {

    const navTask = useNavigate()

  return (
    <>
    <div className='p-10 mt-5 flex flex-col gap-4'>
        {/* Task1 */}
        <div className='flex gap-10'>
            <p>1 . Counter using state</p>
            <button onClick={()=>navTask('/counter5')} className='bg-amber-400 p-1 font-medium rounded w-30 cursor-pointer '>View</button>
        </div>
        <div className='flex gap-10'>
            <p>2 . Student Name Update</p>
            <button onClick={()=>navTask('/nameupdate')} className='bg-amber-400 p-1 font-medium rounded w-30 cursor-pointer '>View</button>
        </div>
    </div>
    </>
  )
}

export default HomeTask5