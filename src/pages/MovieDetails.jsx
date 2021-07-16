import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import stylesMovieDet from "./MovieDetails.module.css";
import { Spinner } from "../components/Spinner";
import { FaArrowCircleRight } from "react-icons/fa";


export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId ).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner />;
        
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return <div className={stylesMovieDet.detailsContainer}>
        <img className={`${stylesMovieDet.col} ${stylesMovieDet.movieImg}`} src={imageUrl} alt={movie.title} />
        <div className={`${stylesMovieDet.col} ${stylesMovieDet.movieDetails}`}>
            <p className={stylesMovieDet.firstItem}><strong><FaArrowCircleRight className={stylesMovieDet.arrowIcon} /> Title: </strong>{movie.title}</p>
            <p><strong><FaArrowCircleRight className={stylesMovieDet.arrowIcon} /> Release date: </strong> {movie.release_date}</p>
            <p><strong><FaArrowCircleRight className={stylesMovieDet.arrowIcon} /> Language: </strong>{movie.spoken_languages.map(language => language.name).join(", ") }</p>
            <p><strong><FaArrowCircleRight className={stylesMovieDet.arrowIcon} /> Production countries: </strong>{movie.production_countries.map(country => country.name).join(", ") }</p>
            <p><strong><FaArrowCircleRight className={stylesMovieDet.arrowIcon} /> Vote average: </strong> {movie.vote_average}</p>
            <p><strong><FaArrowCircleRight className={stylesMovieDet.arrowIcon} /> Genre: </strong>{movie.genres.map(genere => genere.name).join(", ") }</p>
            <p><strong><FaArrowCircleRight className={stylesMovieDet.arrowIcon} /> Description: </strong> {movie.overview}</p>
        </div>
    </div>;
}