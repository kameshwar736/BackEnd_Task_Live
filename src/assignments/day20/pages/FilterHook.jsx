import React from 'react'
import useFilter from '../hooks/useFilter'

const FilterHook = () => {


    const {data} = useFilter('https://dummyjson.com/products')

    
  return (
    <>

    <div>
        {data.products?.map((e,i)=>(
            <div key={i+1}>
                <div>
                    <img src={e.images} alt="" className='w-50'/>
                </div>
                <div>
                    {e.title}
                </div>
                <div>
                    {e.price}
                </div>


            </div>

        ))}
    </div>
    
    </>
  )
}

export default FilterHook