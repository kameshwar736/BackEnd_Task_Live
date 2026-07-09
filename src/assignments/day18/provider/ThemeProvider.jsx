import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState(false) 
    const handleTheme = ()=>{
        setTheme(!theme)
    }
    

  return (
   <>
   <ThemeContext.Provider value={{theme,setTheme,handleTheme}}>
    {children}
   </ThemeContext.Provider>
   </>
  )
}

export default ThemeProvider