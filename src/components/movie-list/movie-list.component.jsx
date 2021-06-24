import MovieCard from "../movie-card/movie-card.component";


const MovieList = ({movies = []}) => {


    return <div className='card-list'>
        {movies.length
            ? (movies.map(movie => <MovieCard key={movie.imdbID} {...movie}/>))
            : (<h4>Nothing</h4>)}

    </div>
}
export default MovieList
