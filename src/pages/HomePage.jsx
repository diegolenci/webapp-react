import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard"

export default function HomePage(){
    return(
        <>
             <h1 className="text-primary">Movie</h1>
             <div className="row row-cols-3">
                <MovieCard/>
                <ReviewCard/>
             </div>
        </>
    )
}