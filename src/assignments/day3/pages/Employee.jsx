import React from 'react'
import User from './User'

const Employee = () => {

    const empDetail = {name : "kamesh" , id : 101 , department : "CS" , salary : 20000 , exp : 2}



  return (
    <>
    <User data = {empDetail}/>
    </>
  )
}

export default Employee