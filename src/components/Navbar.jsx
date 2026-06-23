import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='p-8 bg-blue-900 text-white flex justify-between '>
        <div className='text-4xl px-5'>Kameshwar T</div>
        <div className='flex gap-10 items-center'>
           <NavLink to={"/"}  className={({isActive})=>isActive?"bg-white text-blue-900 p-1 rounded-sm  text-center":"text-white"}>Home</NavLink>
            <NavLink to={"/placeTrackTask"}  className={({isActive})=>isActive?"bg-white text-blue-900 p-1 rounded-sm  text-center":"text-white"}>PlaceTrack Task</NavLink>
           
            <p className='cursor-not-allowed'>Profile</p>
        </div>
    </div>
    </>
  )
}

export default Navbar