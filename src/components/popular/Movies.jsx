import React from 'react';
import styles from './Popular.module.scss'
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import {getModalInfo} from "../../redux/actions/getMovieInfo";
function Movies({ movie }) {
    const dispatch = useDispatch();

    const handleSendData = (id) => {
        dispatch(getModalInfo(id))
    }
    return (
        <Link to={`films/id/${movie.id}/info`}>
            <div onClick={() => handleSendData(movie.id)} className={styles.card}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt=""/>
                <div className={styles.nameMovies}>
                    <p>{movie.title}</p>
                </div>
            </div>
        </Link>
    );
}

export default Movies;