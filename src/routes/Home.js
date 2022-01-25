import { useState, useEffect } from "react";
import Movie from "../components/Movie"
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMoives] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
            )
        ).json();
        setMoives(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loding...</h1>
            ) : (
                movies.map((item, index) => (
                    <Movie
                        key={item.id}
                        id={item.id}
                        coverImg={item.medium_cover_image}
                        title={item.title}
                        summary={item.summary}
                        genres={item.genres}
                    />
                ))
            )}
        </div>
    );
}

export default Home;