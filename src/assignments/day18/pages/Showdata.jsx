import React, { useContext, useEffect, useRef, useState } from 'react'
import InputContext from '../context/InputContext'

const Showdata = () => {

  const [refresh, setRefresh] = useState(false)

  const { display, arrData, handleAdd, listRef, task, deleteTask } = useContext(InputContext)



  console.log(task)



  return (
    <>
      <p ref={display}>demo</p>

      <ol ref={listRef}>
        {/* <li>REf array</li> */}
      </ol>

        <br />
        <hr />
      {/* <div>
        {
          task?.map((tsk, i) => (
            <p key={tsk}>{tsk} <span><button onClick={() => deleteTask(i)}>X</button></span></p>
          ))
        }
      </div> */}
    </>
  )
}

export default Showdata