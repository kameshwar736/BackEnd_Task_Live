import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Toggle = () => {


    const {theme,setTheme,handleTheme} = useContext(ThemeContext)


  return (
  <div className={theme?'bg-black text-white flex justify-center items-center h-100 border':'bg-white text-black flex justify-center items-center h-100 border'}>
    <button onClick={handleTheme} className={theme?'bg-white rounded-2xl p-2 text-black':'bg-black rounded-2xl p-2 text-white'} >Change to Dark</button>
  </div>
  )
}

export default Toggle