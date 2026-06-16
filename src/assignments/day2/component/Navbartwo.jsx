import React from 'react'
import { Link } from 'react-router-dom'

const Navbartwo = () => {
  return (
   <>
      <div className='p-8 bg-blue-900 text-white flex justify-between'>
        <div className='text-4xl px-5'>Day 1</div>
        <div className='flex gap-10 items-center'>
            <Link to={'/lobby'}>Home</Link>
            <Link to={'/about'}>About</Link>
             <Link to={'/contact'}>Contact</Link>
            <Link to={'/'} className='bg-amber-600 p-2 rounded-2xl'>Go To Home</Link>

        </div>
    </div>
   
   </>
  )
}

export default Navbartwo