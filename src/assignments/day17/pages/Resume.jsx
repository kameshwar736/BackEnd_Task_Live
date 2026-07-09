import React, { useRef } from 'react'

const Resume = () => {

    const nameRef = useRef(null)
    const inputNameRef = useRef(null)
    
    const inputMailRef = useRef(null)
    const inputMobileRef = useRef(null)
    const inputCityRef = useRef(null)
    const phoneRef = useRef(null)
    const mailRef = useRef(null)
    const locationRef = useRef(null)

    const handleNameChange = ()=>{
        nameRef.current.innerText = inputNameRef.current.value
        phoneRef.current.innerText = inputMobileRef.current.value
        
        
        mailRef.current.innerText = inputMailRef.current.value
        locationRef.current.innerText = inputCityRef.current.value
        
        
    }


    const nextDiv = useRef(null)
     const nextDiv2= useRef(null)

    const handleNext = ()=>{
        nextDiv.current.style.display = "none"
        nextDiv2.current.style.display = "block"


    }




  return (
    <>
    <div className='flex'>
        <div className='w-150 flex flex-col p-10 gap-5 bg-blue-800 justify-center items-center ' ref={nextDiv}>
            <input className='bg-white p-1 rounded w-70 ' ref={inputNameRef} type="text" placeholder='Enter your Name' onChange={handleNameChange} />
            <input className='bg-white p-1 rounded w-70 '  ref={inputMailRef} type="text" placeholder='enter your mail' onChange={handleNameChange}/>
            <input className='bg-white p-1 rounded w-70 '  ref={inputMobileRef} type="number" placeholder='enter your mobile no' onChange={handleNameChange} />
            <input className='bg-white p-1 rounded w-70 '  ref={inputCityRef}  type="text" placeholder='enter the location' onChange={handleNameChange}/>
            <div className='flex '>
                <button onClick={handleNext}  className='bg-white p-1 w-20 rounded-2xl'>next</button>
            </div>
        </div>


        <div style={{display:'none'}}  className='bg-blue-800 flex flex-col p-10 ' ref={nextDiv2}>

            
           <div className='flex flex-col gap-5 w-100 p-10'>
            <textarea id=""  className='bg-white p-1 rounded w-70 '  cols="30" rows="5" placeholder='enter the Summary '></textarea>
             <input  className='bg-white p-1 rounded w-70 ' type="text" placeholder='Enter the Skills' />
            <input  className='bg-white p-1 rounded w-70 ' type="text" placeholder='Project Tittle '/>
           </div>

        </div>


        <div className=' w-screen '>
           
             <p className='flex pt-10 justify-center text-5xl ' ref={nameRef}>Name</p>

             <div className='flex justify-center gap-3 pt-2 text-lg'>
                <p ref={phoneRef}>phone</p>
                <p ref={mailRef}>mail</p>
                <p ref={locationRef}>location</p>
             </div>
          
        </div>
    </div>

    </>
  )
}

export default Resume