import { Link } from "react-router-dom";

export default function BookCard(){
    return(
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Titolo film</h5>
                    <span>
                        Author
                    </span>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur audispicing elit
                    </p>
                    <Link to={'movies/2'}>Watch more</Link>
                </div>
            </div>
        </>
    )
}