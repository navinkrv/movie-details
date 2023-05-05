import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import  parse  from "html-react-parser";
import Modal from "../ui/Modal";

export  const ShowDetails=  ()=>{
const [data,setData]=useState()
const [modal,setModal]=useState("");



    const {id}=useParams();

    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all")
        .then((res)=>{

          setData(  res.data.filter((item)=>{
                    // console.log(item.show.id);
                return item.show.id == id;
            }))
        })
        .catch((err)=>{
            console.log(err);
        })
    },[id])
    
   
    return(
        <div className="show">

            <div className="banner" style={{backgroundImage:`url(${data!==undefined?data[0].show.image.original:""})`}}>
                <div className="title">
                    <h1>{data!==undefined?data[0].show.name:""}</h1>
                    <p>{data!==undefined?data[0].show.genres.toString():"N/A"}</p>
                </div>
            </div>
            <section className="showDetails">
              <div className="row">

              
              <div className="half">
                <h3>Summary  </h3>
                <div> {data!==undefined?parse(data[0].show.summary):"N/A"}</div>

                <button className="btn-buy" onClick={()=>{
                  setModal(<Modal action={setModal} data={data!==undefined?data[0]:[]}/>)
                }}>
                      Buy Now
                </button>

              </div>
              <div className="half">
                   <div className="details">
                    {/* <h3>Check Your Taste !</h3> */}


                    <table>
                      <tr>
                        <td>Language : {data!==undefined?data[0].show.language:"N/A"}</td>
                        <td>Rating : {data!==undefined && data[0].show.rating.average !== null?data[0].show.rating.average:"N/A"}</td>
                      </tr>
                      <tr>
                        <td>Genre : {data!==undefined?data[0].show.genres.toString():"N/A"}</td>
                        <td>Duration : {data!==undefined?data[0].show.runtime.toString()+" min":"N/A"}</td>
                      </tr>
                      <tr>
                        <td>Released : {data!==undefined?data[0].show.premiered:"N/A"}</td>
                        <td>Duration : {data!==undefined?data[0].show.runtime.toString()+" min":"N/A"}</td>
                      </tr>
                     
                    </table>
                 
                </div>
              </div>
              </div>
            </section>
         {modal}
        </div>
    )
}