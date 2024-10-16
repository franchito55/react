import './index.css'

export function Movie( { movie } ) {
    console.log(`Movie: ${movie}`);
    return(
        <div className='movie-div'>
            <h1 className='movie-title'>{movie.title}</h1>
            <h2 className='movie-year'>{movie.releaseYear}</h2>
            <h3 className='movie-h3'>{movie.director.name}</h3>
        </div>
    )
}