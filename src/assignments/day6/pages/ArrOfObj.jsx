import { useState } from "react"
import course from '../../../assets/react.svg'
const ArrOfObj = () => {

 const [users,setUsers] = useState([

    {image:course,name:"React",year:2013,cat:"Node",plan:"Basic"},
    {image:course,name:"Node",year:2014,cat:"Node",plan:"Hard"},
    {image:course,name:"Angular",year:2015,cat:"Node",plan:"Hard"},
    {image:course,name:"HTML",year:2017,cat:"Node",plan:"Basic"},
    {image:course,name:"Express",year:2020,cat:"Node",plan:"Basic"},
]) 


  console.log(users);
  
const handleClick = (indexvalue)=>{

  // alert(indexvalue);
const edit =  users.map((e,i)=>i === indexvalue?{...e,name:"Vijai"}:e)

setUsers(edit)
console.log(users);

}

  return (
    <>
     <div className="bg-green-500 p-10 h-150">
         <div className="flex justify-items-start gap-5 items-center">
          <h1 className="mb-5 text-center bg-white w-25 rounded p-2">Object</h1>
           <button className=" bg-white p-2 rounded mb-5" >Click to Update</button>
        </div>
        <div className="bg-white p-10 flex gap-6">
          {users.map((e,i)=>(
            <div className="bg-black p-3 text-white w-50 h-60 rounded-2xl" key={i+1}>
            <img src={e.image} alt="" />
              <h1>{e.name}</h1>
              <p>{e.year}</p>
              <p>{e.cat}</p>
              <p className="mb-5">{e.plan}</p>
               <button className="bg-white w-25 text-center rounded p-1 text-black" onClick={()=>handleClick(i)}>More</button>
          </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default ArrOfObj