import React from 'react';
import styles from './Header.module.scss'
import { ImSearch } from 'react-icons/im'
import { ImFire } from 'react-icons/im'
import { ImHeart } from 'react-icons/im'
import { ImInfo } from 'react-icons/im'
import { NavLink} from "react-router-dom";

    function Index() {
        const selected = {
            color: '#01a1ff',
        }

        const favorite = {
            color: 'red'
        }
    return (
        <div className={styles.header}>
           <div className={styles.nav}>
               <NavLink exact to='/' activeStyle={selected}>
                   <ImFire />
               </NavLink>
               <NavLink to='/search' activeStyle={selected}>
                   <ImSearch />
               </NavLink>
               <NavLink to='/favorite' activeStyle={favorite}>
                   <ImHeart />
               </NavLink>
               <NavLink to='/info' activeStyle={selected}>
                   <ImInfo />
               </NavLink>
           </div>
        </div>
    );
}

export default Index;