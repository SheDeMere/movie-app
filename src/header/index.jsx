import React from 'react';
import styles from './Header.module.scss'
import { ImSearch } from 'react-icons/im'
import { ImFire } from 'react-icons/im'
import { ImHeart } from 'react-icons/im'
import { ImInfo } from 'react-icons/im'

    function Index(props) {
    return (
        <div className={styles.header}>
           <div className={styles.nav}>
               <ul>
                   <li><ImSearch /></li>
                   <li><ImFire /></li>
                   <li><ImHeart /></li>
                   <li><ImInfo /></li>
               </ul>
           </div>
        </div>
    );
}

export default Index;