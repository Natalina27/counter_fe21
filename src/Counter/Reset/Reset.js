import React from 'react';
import styles from './Reset.module.css'


function Reset({onReset}) {

    return (

        <button  className={styles.reset}
                 onClick={() => onReset()}
        > RESET</button>

    );
}

export default Reset;