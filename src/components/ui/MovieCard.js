import { Link } from "react-router-dom";

export const MovieCard = ({data})=>{

console.log(data.show.rating);

    return (
        <Link to={`/show/${data.show.id}`}>
        <div className="card">
            <img src={data.show.image !== null ? data.show.image.medium :"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"} alt="" />
            <h5>{data.show.name}</h5>
            <div className="row">
                <span className="lang">{data.show.language} </span>
                <span className="rating"><b>Rating :</b> {data.show.rating.average!==null?data.show.rating.average.toString():" N/A"}</span>
            </div>
        </div>
        </Link>
    )
}