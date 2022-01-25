import { useState, useEffect } from "react";
import Movie from "../components/Movie"
import styles from "./Home.module.css";
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
            <div className={styles.container}>
                {loading ? (
                    <div className={styles.loader}>
                        <span>Loading...</span>
                    </div>
                ) : (
                    <div className={styles.movies}>
                        {movies.map((item, index) => (
                            <Movie
                                key={item.id}
                                id={item.id}
                                coverImg={item.medium_cover_image}
                                title={item.title}
                                summary={item.summary}
                                genres={item.genres}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;