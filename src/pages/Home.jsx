import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const goto = useNavigate()

    const [sort,setSort] = useState(true)

    const [day,setDay] = useState("")

    const handleDate = (e)=>{

        if(e.target.value > tasks.length){
            alert("invalid")
           setDay("")
            return
        }
        setDay(e.target.value)
        
        
    }

    console.log(sort);

    const tasks = [
        { id: 1, day : 1, title: "Day 1", desc: "Create web pages using react", path: "/day1" },
        { id: 2, day : 2, title: "Day 2", desc: "Create web pages using routings", path: "/lobby" },
        { id: 3, title: "Spl class", desc: "Create web pages using Props", path: "/user" },
        { id: 4, day : 3, title: "Day 3", desc: "Multi-component, component tree", path: "/studui" },
        { id: 5, day : 4, title: "Day 4", desc: "Class component, state, lifecycle", path: "/classComponent" },
        { id: 6, day : 5, title: "Day 5", desc: " Hooks - UseState WIth rendering Methods", path: "/hometask5" },
        { id: 7, day : 6, title: "Day 6", desc: " Batch update - Rendering Methods HOAM", path: "/array" },
        { id: 8, day : 7, title: "Day 7", desc: "  React UseState Hooks - with Form Handling", path: "/display" },
        { id: 9, day : 8, title: "Day 8", desc: " Higher Order Component (HOC), code reuse patterns", path: "/bgcolor" },
        { id: 10, day : 9, title: "Day 9", desc: "  useState w/ arrays, immutable update, add/remove, state patterns", path: "/form9" },
        { id: 11, day : 10,  title: "Day 10", desc: "  Form Handling - Todo List", path: "/studentForm" },
        { id: 12, day : 11,  title: "Day 11", desc: " Form Handling: controlled input, multi-field, error handling Event Handling, Controlled In", path: "/reg11" },
        { id: 13,  title: "Spl Test", desc: "Test & Task (27-06-2026)", path: "/spStudent" },
        { id: 14, day : 13 , title: "Day 13", desc: "useEffect Search & Filter", path: "/search" },
        { id: 15, day : 15 , title: "Day 15", desc: "useEffect Search & Filter", path: "/search15" },
        { id: 16, day : 16 , title: "Day 16", desc: "todo , Search & Filter", path: "/todo16" },
        { id: 17, day : 17 , title: "Day 17", desc: "useRef process", path: "/resume" },
        { id: 18, day : 18 , title: "Day 18", desc: "Context APi", path: "/showdata" }

    ];


    const sortedTasks = [...tasks].sort((a, b) => {
        return sort ? b.id - a.id : a.id - b.id;
    });

    console.log(sortedTasks);
    
    

    return (
        <>
            <div className='bg-gray-200 h-fit relative top-25'>
                <div className='flex justify-between px-10 pt-10'>
                 <div className='flex  w-90 justify-between'>
                    <div className='text-2xl font-bold '>
                        Daily task
                    </div> 
                        <input className=' border p-2 text-center rounded-lg h-8' type="number" value={day} onChange={handleDate} placeholder='Search Day' />
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

                    {(day ? sortedTasks.filter((e) => e.day == day) : sortedTasks).map((e, i) => (

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