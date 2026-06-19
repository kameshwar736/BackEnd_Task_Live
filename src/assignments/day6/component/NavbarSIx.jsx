import React from 'react'
import { Link } from 'react-router-dom'

const NavbarSIx = () => {
    return (
        <>
            <div className='p-8 bg-blue-900 text-white flex justify-between'>
                <div className='text-4xl px-5'>Day 1</div>
                <div className='flex gap-10 items-center'>
                    <Link to={'/array'}>Array Render</Link>
                    <Link to={'/obj'}>Obj Render</Link>
                    <Link to={'/arrofobj'}>ArrOfObj Render</Link>
                    <Link to={'/'} className='bg-amber-600 p-2 rounded-2xl'>Go To Home</Link>

                </div>
            </div>

        </>
    )
}

export default NavbarSIx