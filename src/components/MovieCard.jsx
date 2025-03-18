import { Link } from "react-router-dom";

export default function MovieCard({movie}){

    const { id, title, director, abstract, release_year, image } = movie
    
    return(
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5>
                        {director}
                    </h5>
                    <h6>
                        {release_year}
                    </h6>
                    <p>
                        {abstract}
                    </p>
                    <Link to={`movies/${id}`}>Watch more</Link>
                </div>
            </div>
        </>
    )
}