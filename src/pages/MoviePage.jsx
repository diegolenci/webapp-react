import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"

export default function MoviePage(){

    const {id} = useParams()

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then((res) => setMovie(res.data))
        .catch((error) => console.log(error));
    };

    useEffect(fetchMovie, [id])
    
    const renderReviews = () => {
        return(
            movie.reviews?.map( (review) => {
                return(
                    <ReviewCard key={review.id} review={review}/>
                )
            })
        )
    }

    return(
        <>
            <h1>{movie.title}</h1>
            <section>
                <h4>Reviews:</h4>
                {renderReviews()}
            </section>
            
            <section>
                {movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie}/> }
            </section>
        </>
    )
}