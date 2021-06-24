import MovieList from "../../components/movie-list/movie-list.component";
import {useEffect, useState} from "react";
import Preloader from "../../components/preloader/preloader.component";
import Search from "../../components/search/search.component";

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const searchMovies = (str, type) => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)


            .then(response => response.json())
            .then(data => {
                    setLoading(false);
                    setMovies(data.Search);
                }
            )
    }

    useEffect(() => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=deftones`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            }
        )
            .catch((error)=>{
                console.log(error)
                setLoading(false)
        })
    }, [])


    return (
        <main>
            <Search searchMovies={searchMovies}/>
            {loading
                ? <Preloader/>
                : <MovieList movies={movies}/>
            }
        </main>
    )

}

export default Main;
