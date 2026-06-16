import React, { useState } from 'react'

const Counter = () => {

const [count,setCount] = useState(0)
const [theme,setTheme] = useState(false)
const handleClick = ()=>{
    setCount(count+1)
}
const handleTheme = ()=>{
    setTheme(!theme)
}

  return (
    <>
    <div className={`${theme?'bg-black text-white':'bg-white text-black'}  p-4 h-screen flex  flex-col justify-center items-center gap-10`}>
        <h1 className='text-8xl font-bold'>{count}</h1>
        <button onClick={handleClick} className={`${theme?'bg-white text-black':'bg-black text-white'} w-30 p-2 rounded-2xl`}>Add Count</button>
        <button onClick={handleTheme} className={`${theme?'bg-white text-black':'bg-black text-white'} w-30 p-2 rounded-2xl`}>Light</button>
    </div>
    
    </>
  )
}

export default Counter