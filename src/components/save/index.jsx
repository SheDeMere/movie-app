import React from 'react';
import styles from './Save.module.scss'
import Save from "./Save";
import {ImBin2} from 'react-icons/im'

function Index() {
    const movies = JSON.parse(localStorage.getItem('savedMovies'))
    console.log(movies)
    const handleRemove = (e) => {
            window.location.reload()
            localStorage.removeItem('savedMovies')
    }
    return (
        <div className={styles.saveMain}>
            {movies === null ?
            <div className={styles.empty}>
                <h1>Cохрани что-нибудь :(</h1>
                <img src="https://media3.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=ecf05e47v2avk7coqka1h3tc4m8za78p2iqstm7q8h4blxkr&rid=giphy.gif&ct=g" alt=""/>
            </div>
                :
                <div className={styles.saveMainItems}>
                    <button  onClick={handleRemove}>
                        <ImBin2 />
                    </button>
                    {
                        movies.map((item, index) => {
                            return <Save  movie={item} key={index}/>
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Index;