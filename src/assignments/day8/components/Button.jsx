import React from 'react'

const Button = ({color}) => {


    console.log(color);
    

  return (
    <>
    <button>Clickhere</button>
    <div style={{backgroundColor : color , padding : 20 , display : 'flex' }}>
        helo world
    </div>
    </>
  )
}

export default Button