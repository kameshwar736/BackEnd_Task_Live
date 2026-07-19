import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PlaceTrackTask = () => {


    const goto = useNavigate()

    const [sort,setSort] = useState(true)

    console.log(sort);

    const tasks = [
        { id: 1, title: "Task 1", desc: "22-Jun-2026 ", path: "/taskone" },
         { id: 2, title: "Task 2", desc: "10-July-2026 ", path: "/refT2" }
    ];


    const sortedTasks = [...tasks].sort((a, b) => {
        return sort ? b.id - a.id : a.id - b.id;
    });

    console.log(sortedTasks);
    



  return (
   <>
   
            <div className='bg-gray-200 h-screen relative top-25'>
                <div className='flex justify-between px-10 pt-10'>
                    <div className='text-2xl font-bold'>
                        Assigned task
                    </div>
                    <div className='pr-23 font-medium flex gap-3'>
                        <span className='text-xl'>Sortby </span> 
                        <select className='bg-blue-700 text-white rounded p-1' onChange={(e)=>setSort(e.target.value == "true")}>
                            <option  value={true}>Newest</option>
                            <option value={false}>Oldest</option>
                        </select>
                    </div>

                </div>

                <div className='flex flex-wrap'>

                    {
                        sortedTasks.map((e,i)=>(

                            <div className='flex p-10' key={e.id}>
                                <div className='bg-gray-300 w-70 h-50 flex flex-col p-5 justify-between rounded-2xl'>
                                    <h1 className='text-xl'>{e.title}</h1>
                                    <p>Date : {e.desc}</p>
                                    <div className='flex justify-center'>
                                        {console.log(e.path)
                                        }
                                        <button onClick={() => { goto(e.path) }} className='bg-amber-400 p-1 font-medium rounded w-30 cursor-pointer '>View task</button>
                                    </div>
                                </div>
                            </div>

                        ))
                        
                    }


                </div>
            </div>
        </>
  )
}

export default PlaceTrackTask