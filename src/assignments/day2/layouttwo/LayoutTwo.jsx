import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbartwo from '../component/Navbartwo'

const LayoutTwo = () => {
  return (
    <>
    <Navbartwo/>
    <Outlet/>
    </>
  )
}

export default LayoutTwo