import React, { useState } from 'react'
import withHigherComponent from '../HOC/withHigherComponent'
import Button from '../components/Button'



const FirstButton = withHigherComponent(Button)
const SecondButton = withHigherComponent(Button)

const BackgroundColor = () => {

  const [theme,setTheme] = useState(false)
  const [count , setCount] = useState(0)

  const handleColor = ()=>{

    setTheme(!theme)
    setCount((prev)=>prev+1)
  }




  return (
   <>
   <FirstButton color = {theme?'red':'black'}  handleColor = {handleColor}/>
   <SecondButton showCount = {count} />
   
   </>
  )
}

export default BackgroundColor