import React from 'react';
const MovieCard=({movie}) =>{
    return(
        <div className="movie-card">
            <h2>{movie.name}</h2>
            <p>Rating:{movie.rating}</p>
            <p>Releasedate:{movie.releasedate}</p>
        </div>
    );
};
export default MovieCard;