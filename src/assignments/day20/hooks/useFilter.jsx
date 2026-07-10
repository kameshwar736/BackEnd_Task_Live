import React, { useEffect, useState } from 'react'

const useFilter = (url) => {

    const [data,setData] = useState([])

    const fetchFunc = async()=>{
        const getData = await fetch(url)
        const tranformData = await getData.json()
        setData(tranformData)
    }


    useEffect(()=>{
        fetchFunc()

    },[url])


    return {data}
 
}

export default useFilter