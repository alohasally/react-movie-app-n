import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

function Movie({id, url, title, coverImg, summary, genres}){
    return (
    <div>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <img src={coverImg} alt={title}/>
            <a href={url}></a>
            <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
            <ul>
            {genres.map((g)=>(
                <li key={g}>{g}</li>)
            )}
            </ul>
        </div> 
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;