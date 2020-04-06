import React from 'react';
import styles from './Buttons.module.css'


function Buttons(
    { buttons, onButtonClick, resultNumb }
) {
    return (
        <div className={styles.buttons}>
            <div className={styles.negatives}>
                {buttons.reverse().map(el => <button key={-el}
                                                     onClick={() => onButtonClick(-el)}
                                                     className={styles.button}>
                    {-el}
                </button>)}</div>
            <span className={styles.number}>{resultNumb}</span>
            <div className={styles.positives}>
                {buttons.reverse().map(el => <button key={el}
                                                     onClick={() => onButtonClick(el)}
                                                     className={styles.button}>
                    +{el}
                </button>)}
            </div>
        </div>

    );
}

export default Buttons;