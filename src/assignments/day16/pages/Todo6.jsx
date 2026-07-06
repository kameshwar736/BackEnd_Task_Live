import React, { useState } from 'react'
import Login11 from '../../day11/pages11/Login11'

const Todo6 = () => {


    const [formData,setFormdata] = useState({name : "" , mobile : "" , mail : "" , city : ""})
    const [saveData,setSaveData] = useState([])
    const [isEdit,setIsEdit] = useState(null)
    const [search,setSearch] = useState("")
    
    const handleChange = (e)=>{
        setFormdata({...formData,[e.target.name]:e.target.value})
    }

    const handleAdd = (e)=>{
        e.preventDefault()

        const id = saveData.length +1
        const temp = {id,...formData}
        console.log(temp);
        
        setSaveData((prev)=>[...prev,temp])
        setFormdata({name : "" , mobile : "" , mail : "" , city : ""})
    } 

    const handleEdit =(e)=>{  
        setIsEdit(e.id) 
        setFormdata(
          {
              name  : e.name,
              mobile : e.mobile,
              mail : e.mail,
              city : e.city
          }
        )
    }

    const handleUpdate =(e)=>{

        e.preventDefault()

        const findObj = saveData.map((e,i)=>isEdit === e.id ? {id : isEdit , ...formData} : e)
        setSaveData(findObj)

        setIsEdit(null)
        setFormdata({name : "" , mobile : "" , mail : "" , city : ""})

    }

    const handleDelete = (id)=>{
       
       const removeUser = saveData.filter((e,i)=>e.id !== id)
       setSaveData(removeUser)

    }

    const handleSearch =(e)=>{
        setSearch(e.target.value)
    }


    let displayData = [...saveData]
    console.log(displayData);

    if(search){
        displayData = displayData.filter((e,i)=>e.name.toLowerCase().includes(search.toLowerCase()) || e.mail.toLowerCase().includes(search.toLowerCase()) || e.mobile.includes(search)  )
    }
    

    

    
    




  return (
   <>
   <div className='flex justify-center items-center flex-col p-5 gap-5'>
    <div className='text-2xl'>User Register Form</div>
    <form>
       <div className='flex flex-col justify-center items-center p-3 gap-4'>
         <input className='bg-gray-300 text-center p-1 w-60' type="text" placeholder='Name' name='name' value={formData.name}  onChange={handleChange}/>
        <input className='bg-gray-300 text-center p-1 w-60'  type="text" placeholder='mobile'  name='mobile' value={formData.mobile} onChange={handleChange}/>
        <input className='bg-gray-300 text-center p-1 w-60'  type="text" placeholder='email' name='mail' value={formData.mail} onChange={handleChange}/>
        <input className='bg-gray-300 text-center p-1 w-60'  type="text" placeholder='city' name='city' value={formData.city} onChange={handleChange}/>
        {isEdit?  <button className='bg-green-300 p-1 w-40 rounded-2xl' onClick={handleUpdate}>update</button>: <button className='bg-yellow-600 w-40 p-1 rounded-2xl' onClick={handleAdd}>Add</button>}
       </div>
    </form>
   </div>

    <div className='flex justify-center p-5'>
        
            <input className='p-2 border rounded-2xl'  type="text" placeholder='Search user' onChange={handleSearch} />
     
    </div>

   <div className='flex justify-center '>
    <table className='table border-separate border border-2  '>
        <thead>
            <tr>
                <th>s.no</th>
                <th>name</th>
                <th>mobile</th>
                <th>email</th>
                <th>city</th>
            </tr>
        </thead>
        <tbody>
            {displayData.map((e,i)=>(
                <tr key={i + 1}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.mobile}</td>
                    <td>{e.mail}</td>
                    <td>{e.city}</td>
                    <td><button className='bg-gray-400 p-0.5 rounded' onClick={()=>handleEdit(e)}>Edit</button></td>
                    <td><button className='bg-gray-400 p-0.5 rounded' onClick={()=>handleDelete(e.id)}>delete</button></td>
                </tr>
            ))}
        </tbody>
    </table>
   </div>
   </>
  )
}

export default Todo6