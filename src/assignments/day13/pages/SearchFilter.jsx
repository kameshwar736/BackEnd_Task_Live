import React, { useEffect, useState } from 'react'

const SearchFilter = () => {

    const [showData,setShowData] = useState([])
    const [products,setProducts] = useState([])
    const [category,setCategory] = useState([])


      const fetchData = async()=>{
            const searchData = await fetch("https://dummyjson.com/products?limit=20")
            const transformData = await searchData.json()
            setShowData(transformData.products)
            setProducts(transformData.products)

            const listCat = [...new Set(transformData.products.map((e,i)=>e.category))]
            setCategory(listCat)

        }
    
    

    useEffect(()=>{
        fetchData()
    },[])

    
    const handleSearch =(e)=>{
        const searchValue = e.target.value

        if(searchValue){
             const filterData = showData.filter((e,i)=>e.title.toLowerCase().includes(searchValue.toLowerCase()))
             setShowData(filterData&&filterData )
        }else{
            setShowData(products)
        }
       
        
    }

    const handleCategory = (e)=>{

        const categoryDetail = e.target.value

       if(categoryDetail === "showAll"){
        setShowData(products)
        return
       }
        

        if(categoryDetail){
            const filterCat = products.filter((e,i)=>e.category === categoryDetail)
            setShowData(filterCat)
        }else{
            setShowData(products)
        }


    }

    console.log(showData);
    console.log(products);
    
    


  return (
   <>
    <div className='bg-gray-900 h-fit'>
        <div>
           <div className='flex gap-5 p-10 justify-center items-center '>
             <div >
                <input type="text" className='bg-white rounded-xl p-2 ' placeholder='Search products' onChange={handleSearch} />
            </div>
            <div>
                <select name="" id=""  className='bg-white rounded-xl p-2 ' placeholder='Search products' onChange={handleCategory}>
                    <option selected   value="showAll">Show all</option>

                    {category.map((e,i)=>(
                        <option key={i+1} value={e}>{e}</option>
                    ))}

                </select>
            </div>
           </div>
            <div className='flex  gap-5 p-5 justify-center flex-wrap '>
                { showData.map((e,i)=>(
                  
                    <div key={e.id} className='bg-red-300 p-5 flex flex-col rounded-2xl justify-center items-center text-center w-50 text-lg text-gray-700'>
                        <div>
                            <img src={e.images} alt="img" />
                        </div>
                        <div>
                            <p>{e.title}</p>
                            <p>Category : {e.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
   </>
  )
}

export default SearchFilter