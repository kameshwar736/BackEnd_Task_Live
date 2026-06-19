import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const goto = useNavigate()

    const [sort,setSort] = useState(true)

    console.log(sort);

    const tasks = [
        { id: 1, title: "Day 1", desc: "Create web pages using react", path: "/day1" },
        { id: 2, title: "Day 2", desc: "Create web pages using routings", path: "/lobby" },
        { id: 3, title: "Spl class", desc: "Create web pages using Props", path: "/user" },
        { id: 4, title: "Day 3", desc: "Multi-component, component tree", path: "/studui" },
        { id: 5, title: "Day 4", desc: "Class component, state, lifecycle", path: "/classComponent" },
        { id: 6, title: "Day 5", desc: " Hooks - UseState WIth rendering Methods", path: "/hometask5" },
        { id: 7, title: "Day 6", desc: " Batch update - Rendering Methods HOAM", path: "/array" },
    ];


    const sortedTasks = [...tasks].sort((a, b) => {
        return sort ? b.id - a.id : a.id - b.id;
    });

    console.log(sortedTasks);
    
    

    return (
        <>
            <div className='bg-gray-200 h-screen'>
                <div className='flex justify-between px-10 pt-10'>
                    <div className='text-2xl font-bold'>
                        Daily task
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
                                    <p>task : {e.desc}</p>
                                    <div className='flex justify-center'>
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

export default Home