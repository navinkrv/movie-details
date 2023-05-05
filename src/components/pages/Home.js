import axios from "axios"
import { MovieCard } from "../ui/MovieCard"
import { useEffect, useState } from "react"


export const Home=()=>{
    const [data,setData]=useState()


    useEffect(()=>{

        
        axios.get("https://api.tvmaze.com/search/shows?q=all")
    .then((res)=>{
        setData(res.data);
        // console.log(data);
    }).catch((err)=>{
        console.log(err);
    })

},[])
//  console.log(data);
    return(
        <div className="home">

            {data!==null && data !== undefined ? data.map((item)=>{
                return(

                    <MovieCard key={item.show.id} data={item}/>
                )

            }):""}
        </div>
    )
}