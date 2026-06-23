import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarT1 from '../componentT1/NavbarT1'

const layoutTaskOne = () => {
  return (
    <>
        <NavbarT1/>
        <Outlet/>
    </>
  )
}

export default layoutTaskOne