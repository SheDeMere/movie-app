import React from 'react';
import {useSelector} from "react-redux";
import styles from './Modal.module.scss';
import Loader from "react-loader-spinner";
function Index() {
    const URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
    const { movie, loading } = useSelector(state => state.getMoviesInfo);

    console.log(loading)
    return (
            <div className={styles.movieInfo}>
                {loading ?
                    <div className={styles.preloader}>
                        <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                    </div>
                :
                    <div className={styles.movieMain}>
                        <div className={styles.poster}>
                            <img src={`${URL}/${movie.backdrop_path}`} className={styles.poster} alt="poster"/>
                        </div>
                        <div className={styles.mainInfo}>
                            <h2>{movie.title}</h2>
                            <p className={styles.budget}>
                                Бюджет : {movie.budget}$
                            </p>
                            <p className={styles.realise}>
                                Релиз: {movie.release_date}
                            </p>
                            <p className={styles.time}>
                                Продолжительность: {movie.runtime} минуты.
                            </p>
                            <h2>Жанр</h2>
                            <div className={styles.genres}>
                                {movie.genres.map(i => {
                                    return <p>#{i.name}</p>
                                })}
                            </div>
                            <h2>Описание</h2>
                            <p className={styles.title}>
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                }
            </div>

    );
}

export default Index;