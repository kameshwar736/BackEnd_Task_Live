import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='p-8 bg-blue-900 text-white flex justify-between'>
              <div className='text-4xl px-5'>Day 3</div>
              <div className='flex gap-10 items-center'>
                  <Link to={'/studui'}>Student Card</Link>
                  <Link to={'/course'}>Course</Link>
                  <Link to={'/management'}>Management</Link>
                  <Link to={'/'} className='bg-amber-600 p-2 rounded-2xl'>Go To Home</Link>

              </div>
          </div>
    
    </>
  )
}

export default Navbar