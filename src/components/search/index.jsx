import React, {useState} from 'react';
import styles from './Search.module.scss';
import { ImRocket } from 'react-icons/im'
import {useDispatch, useSelector} from "react-redux";
import {searchMovies} from "../../redux/actions/searchMovie";
import Search from "./Search";

function Index() {
    const [search, setSearch] = useState('');

    const { movies } = useSelector(state => state.getSearchMovie)

    const dispatch = useDispatch();

    const sendKey = (e) => {
        if (e.charCode === 13) {
            dispatch(searchMovies(search))
            setSearch('')
        }
    }
    const handleClick = (e) => {
        dispatch(searchMovies(search))
        setSearch('')
    }
    return (
        <div className={styles.searchMain}>
            <div className={styles.input}>
                <input type="text" placeholder={'Форсаж'} value={search} onChange={e => setSearch(e.target.value)} onKeyPress={event => sendKey(event)}/>
                <ImRocket className={search.length === 0 ? styles.rocket : styles.rocketRed} onClick={handleClick}/>
            </div>
            <div className={styles.moviesMain}>
                {movies.results && movies.results.map((movie, index) => {
                    return <Search movie={movie} key={index}/>
                })}
            </div>
        </div>
    );
}

export default Index;