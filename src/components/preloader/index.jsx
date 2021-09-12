import React from 'react';
import styles from './Preloader.module.scss';
import Loader from "react-loader-spinner";

function Index() {
    return (
            <div className={styles.preloader}>
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            </div>
    );
}

export default Index;