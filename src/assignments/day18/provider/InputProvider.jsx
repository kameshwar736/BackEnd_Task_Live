import React, { useRef, useState } from 'react'
import InputContext from '../context/InputContext'

const InputProvider = ({ children }) => {

  const [refresh, setRefresh] = useState(false);
  const [task, setTask] = useState([])

  const userData = useRef(null)
  const display = useRef(null)
  const listRef = useRef(null)

  // const arrData = []



  const handleChange = () => {


    if(display.current&&userData.current){
          display.current.innerText = userData.current.value

    }


  }

  const handleAdd = (e) => {

    e.preventDefault()
    const value = userData.current?.value?.trim()

    if (!value) return

    setTask(prevTask => [...prevTask, value]);
    
    let tempList = `<li>${value}</li>`
    listRef.current.innerHTML +=tempList
 
    // console.log(task)
    if (userData.current) {
      userData.current.value = ""
    }
  }


  







  // })

  // console.log(listRef);


  const deleteTask = id => {
    setTask(prevTask => prevTask.filter((tsk, i) => i !== id))
  }










  return (
    <>
      <InputContext.Provider value={{ userData, handleAdd, listRef, task, deleteTask ,handleChange ,display }}>
        {children}
      </InputContext.Provider>
    </>
  )
}

export default InputProvider