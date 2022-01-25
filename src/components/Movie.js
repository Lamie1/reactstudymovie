import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Movie = ({ coverImg, title, summary, genres, id, url }) => {
    return (
        <div key={id}>
            <img src={coverImg} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            {url != null && url !== "" ? <a href={url} target="_blank">Go to yts</a> : null}
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
};
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;
