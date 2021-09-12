import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Modal.module.scss';
import Loader from 'react-loader-spinner';
import { ImCross } from 'react-icons/im';
import {Link, useParams} from 'react-router-dom';
import {getInfoMovie} from "../../redux/actions/getMovieInfo";

function Index() {
  const URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  const { movie } = useSelector((state) => state.getMoviesInfo);

  const [loading, setLoading] = useState(true);

  const [save, setSave] = useState(false);

  const dispatch = useDispatch();

  const id = parseInt(useParams().id)

  useEffect(() => {
    dispatch(getInfoMovie(id))
  }, [dispatch])

  const localStorageArr = JSON.parse(localStorage.getItem('savedMovies')) || []

  const handleSave = (saved) => {
    setSave(true)
    localStorageArr.push(saved)
    localStorage.setItem('savedMovies', JSON.stringify(localStorageArr));
  };

  const data = localStorageArr.find(i => i.id === movie.id)

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <div className={styles.movieInfo}>
      {loading ? (
        <div className={styles.preloader}>
          <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className={styles.movieMain}>
          <Link to="/">
            <ImCross className={styles.close} />
          </Link>
          <div className={styles.poster}>
            {movie.backdrop_path === null ? (
              <img
                src="https://skr.sh/i/070921/4ulyoFup.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2007-09-2021%2016:50:22.jpg"
                alt="no photo"
              />
            ) : (
              <img
                src={`${URL}/${movie.backdrop_path}`}
                className={styles.poster}
                alt="poster"
              />
            )}
          </div>
          <div className={styles.mainInfo}>
            <h2>{movie.title}</h2>
            <p className={styles.budget}>Бюджет : {movie.budget}$</p>
            <p className={styles.realise}>Релиз: {movie.release_date}</p>
            <p className={styles.time}>
              Продолжительность: {movie.runtime} минуты.
            </p>

            <div className={styles.genres}>
              {movie.genres && movie.genres.map((i, index) => {
                return <p key={index}>⭕{i.name}</p>;
              })}
            </div>
            <p className={styles.title}>{movie.overview}</p>
            <a href={movie.homepage} target="_blank">
              <button className={styles.homePage}>Домашняя страница</button>
            </a>
            { save || data?.id === movie.id ?
                <p className={styles.saved}>Сохранено</p>
                :
                <button className={styles.save} onClick={() => handleSave(movie)}>
                  Сохранить
                </button>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
