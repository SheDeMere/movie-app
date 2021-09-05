import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/actions/getMovies";
import styles from './Popular.module.scss';
import Movies from "./Movies";
import Preloader from '../preloader'
function Index(){
    const dispatch = useDispatch();

    const {movies, loading} = useSelector(state => state.getMovies)

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])
    return (
        <div className={styles.CardsMain}>
            {loading ?
               <div className={styles.preloader}>
                   {new Array(20).fill(0).map(i => {
                       return <Preloader  />
                   })}
               </div>
                :
                movies.results && movies.results.map((movie, index) => {
                return <Movies movie={movie} key={index}/>
            })}
        </div>
    );
}

export default Index;