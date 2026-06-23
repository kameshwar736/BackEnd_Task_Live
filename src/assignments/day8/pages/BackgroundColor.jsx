import React from 'react'
import withHigherComponent from '../HOC/withHigherComponent'
import Button from '../components/Button'



const FirstButton = withHigherComponent(Button)


const BackgroundColor = () => {
  return (
   <>
   <FirstButton color = {'red'}/>
   
   </>
  )
}

export default BackgroundColor