import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from '../components/Movie';
const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setDetail(json);
        setLoading(false);
    };
    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div>
            {loading ? (<h1></h1>) : 
                <Movie
                    key={detail.data.movie.id}
                    id={detail.data.movie.id}
                    coverImg={detail.data.movie.medium_cover_image}
                    title={detail.data.movie.title}
                    summary={detail.data.movie.description_full}
                    genres={detail.data.movie.genres}
                    url={detail.data.movie.url}
                />
            }
        </div>
    );
};

export default Detail;
