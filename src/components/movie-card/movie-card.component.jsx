const MovieCard = ({
                       Title: title,
                       Year: year,
                       Type: type,
                       Poster: poster
                   }) => {

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {poster !== 'N/A'
                    ? <img className="activator" src={poster}/>
                    : <img className="activator" src={`https://via.placeholder.com/250x350?text=${title}`}/>
                }

            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <div className="card-content">

                    <p>{type}<span className='right'>{year}</span></p>

                </div>
            </div>

        </div>
    )
}

export default MovieCard
