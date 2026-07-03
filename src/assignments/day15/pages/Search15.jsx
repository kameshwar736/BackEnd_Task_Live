import React, { useEffect, useState } from 'react'

const Search15 = () => {

    const [productsData,setProductsData] = useState([])
    const [uniCat,setUniCat] = useState([])
    const [showCat,setShowCat] = useState("")
    const [search,setSearch] = useState("")
    const [sort , setSort] = useState("")



     const loadData = async()=>{
            try{
                const takeData = await fetch("https://dummyjson.com/products")
                const tranformData = await takeData.json()     
                const productsData = tranformData.products
                setProductsData(productsData)   
                
                const category = productsData.map((e,i)=>e.category)
                const unique = [...new Set(category)]
                setUniCat(unique)     
                         
            }catch(err){
                console.log(err);    
            }
        }

    useEffect(()=>{

       

        loadData()


    },[])


    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }

    const handleCategory = (e)=>{
        setShowCat(e.target.value)
        console.log(showCat);
        
    }

    const handleSort =(e)=>{
        setSort(e.target.value)
        
        
    }

    console.log(sort);

    let display = [...productsData]


    if(showCat){
        display = display.filter((e)=>e.category == showCat)
    }


    if(search){
        display = display.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
    }

    if(sort == "asc"){
        display = display.sort((a,b)=>a.price - b.price)
        console.log(sort);
        
    }

    if(sort == "dsc"){
        display = display.sort((a,b)=>b.price - a.price)
    }



  return (
   <>
   <div>

    <input type="text" onChange={handleSearch} />

    <select onChange={handleCategory}>
        <option value="">Select Category</option>
        {
         uniCat.map((e,i)=>(
             <option value={e} key={i}>{e}</option>
         ))   
        }
    </select>

    <select   onChange={handleSort}>
        <option value="" disabled selected >Sort</option>
         
        <option value="asc" >Low to High</option>
        <option value="dec" >High to Low</option>
        

    </select>

    <div>

        {display.map((e,i)=>(
            <div key={e.id}>
                <p>{e.title}</p>
                <p>{e.category}</p>
                <p>{e.price}</p>
            </div>
        ))}
        
    </div>
   </div>
   </>
  )
}

export default Search15