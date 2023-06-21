import React from "react";
import MovieCard from "./Moviecard";

const MovieList =({movies}) =>{
    return(
        <div className="movie-list">
            {movies.map((movie) =>(
                <MovieCard key={movie._id} movie={movie}/>
            ))}
            
        </div>
    );
};
export default MovieList;