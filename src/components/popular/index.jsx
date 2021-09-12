import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Popular.module.scss';
import Movies from './Movies';
import Preloader from '../preloader';

function Index() {
  const KEY = 'eaeabd37164e78e6dbadc4a59825464c';

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [movies, setMovies] = useState([]);

  const [fetching, setFetching] = useState(true);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=${currentPage}&language=ru`,
        )
        .then((res) => {
          setLoading(false);
          setMovies([...movies, ...res.data.results])
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);
  return (
    <div className={styles.CardsMain}>
      {loading ? (
        <div className={styles.preloader}>
          {new Array(20).fill(0).map((i, index) => {
            return <Preloader key={index} />;
          })}
        </div>
      ) : (
        movies &&
        movies.map((movie, index) => {
          return <Movies movie={movie} key={index} />;
        })
      )}
    </div>
  );
}

export default Index;
