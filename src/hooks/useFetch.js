import axios from "axios";
import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";


const useFetch = (url) =>{

    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(false)    
    const [error, setError] = useState(false)
    useEffect(()=>{
        const fetchData = async () =>{
                    try {
                        setLoading(true)
                        const res = await makeRequest.get(
                           url,    /// url from our function argument 
                          ); 
                        setData(res.data.data)
                        console.log(res)
                    } catch (err) {
                        // console.log(err)
                        setError(true)
                    }
                    setLoading(false)
        }; 
        fetchData()
    
    },[url])

    return {data, error, Loading}  /// this return to our function 

}

export default useFetch;   