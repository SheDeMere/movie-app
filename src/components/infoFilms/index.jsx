import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Modal.module.scss';
import Loader from 'react-loader-spinner';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
function Index() {
  const URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  const { movie } = useSelector((state) => state.getMoviesInfo);

  const [loading, setLoading] = useState(true);
  const arr = JSON.parse(localStorage.getItem('MOVIES')) || [];
  const filtered = arr.map(i => {
    return {id: i.id}
  })
  console.log(filtered)
  const handleSave = (movie) => {
    arr.push(movie);
    localStorage.setItem('MOVIES', JSON.stringify(arr));
  };

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
                alt=""
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
              {movie.genres.map((i) => {
                return <p>⭕{i.name}</p>;
              })}
            </div>
            <p className={styles.title}>{movie.overview}</p>
            <a href={movie.homepage} target="_blank">
              <button className={styles.homePage}>Домашняя страница</button>
            </a>
            {movie.id ?
                <button className={styles.save} onClick={() => handleSave(movie)}>
                  Сохранить
                </button>
                :
                <p className={styles.saved}>Сохранено</p>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
