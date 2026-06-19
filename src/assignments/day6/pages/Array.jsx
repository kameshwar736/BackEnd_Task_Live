import React, { use, useState } from 'react'

const Array = () => {


  const [arr, setArr] = useState(["React", "JavaScript", "Nodejs", "Expressjs", "Nextjs"])


  return (
    <>
      <div className='flex justify-center items-center flex-col p-10'>
        <div className='p-10 text-2xl font-medium text-green-400'>
          <h1>Mern Stack </h1>
        </div>
        <div>
          <ol className='flex flex-col gap-3'>
            {arr.map((e, i) => (
                <li key={i+1}>{e}</li>
          ))}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Array