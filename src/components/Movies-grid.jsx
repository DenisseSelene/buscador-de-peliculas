import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { MovieCard } from "./Movies-card";
import styles from "./MovieGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";


export function MoviesGrid() {
    // let movies = [];
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
        ? "search/movie?query=/" + search 
        : "discover/movie";
        get(searchUrl).then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [search]);

    if (isLoading){
        return <Spinner />;
    }


    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}
