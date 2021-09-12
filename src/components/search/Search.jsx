import React from 'react';
import {Link} from "react-router-dom";
import styles from './Search.module.scss'

function Search({ movie }) {
    return (
        <Link to={`films/id/${movie.id}/info`}>
            <div className={styles.card}>
                {movie.poster_path === null ?
                    <img width={220} height={330} src="https://skr.sh/i/070921/4ulyoFup.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2007-09-2021%2016:50:22.jpg" alt=""/>
                    :
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt=""/>
                }
                <div className={styles.nameMovies}>
                    <p>{movie.title}</p>
                </div>
            </div>
        </Link>
    );
}

export default Search;