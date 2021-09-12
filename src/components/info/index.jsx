import React from 'react';
import styles from './Info.module.scss'
function Index() {
    return (
        <div className={styles.info}>
            <h1>Здравствуй друг👋</h1>
            <h2>Тут должна была быть ОГРОМНАЯ информация о приложении, о новых новостях, о новинках, но этого тут не будет, т.к мне лень этим заняться :(</h2>
            <h2>GIT автора - <a className={styles.href} target="_blank" href="https://github.com/SheDeMere">КЛИК</a></h2>
        </div>
    );
}

export default Index;