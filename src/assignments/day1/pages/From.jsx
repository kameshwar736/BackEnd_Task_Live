import React from 'react'

const From = () => {
  return (
    <>
    <div className='flex justify-center p-10'>
        <div className='flex flex-col bg-gray-300'>
            <div className='text-2xl p-3'><h1>Register here</h1></div>
            <div  className='flex flex-col gap-3 justify-center p-6 '>
                <input type="text" placeholder='Enter your name' />
                <input type="number" placeholder='Enter your age' />
                <input type="tel" placeholder='Enter your Mobile' />
                <input type="email" placeholder='Enter your Email' />
                <button>Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default From