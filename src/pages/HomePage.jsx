import MovieCard from "../components/MovieCard";

import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage(){

    const [movies, setMovies] = useState([])

    //funzione fetch per i film
    const fetchMovies = () => {
        console.log('Fetching movies...')

        axios.get('http://localhost:3000/movies')
        .then( res => { setMovies(res.data) } )
        .catch( error => { console.log(error) } )
    }
    //funzione che richiama le card dei film poi usata sotto nel return
    const renderMovies = () => {
        return(
            movies.map( (movie) => {
                return(
                    <div className="col" key={movie.id}>
                        <MovieCard movie={movie}/>
                    </div>
                )
            })
        )
    }

    useEffect( fetchMovies, [] )

    return(
        <>
             <h1 className="text-primary">Movie</h1>
             <div className="row row-cols-3">
                {renderMovies()}
                
             </div>
        </>
    )
}