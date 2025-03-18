import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function MoviePage(){

    const {id} = useParams()

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then((res) => setMovie(res.data))
        .catch((error) => console.log(error));
    };

    useEffect(fetchMovie, [id])
    
    return(
        <>
            <h1>{movie.title}</h1>
        </>
    )
}