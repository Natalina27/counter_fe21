import React from 'react';
import styles from './Buttons.module.css'


function Buttons(
    { positiveRange, negativeRange,  onButtonClick, resultNumb }
) {
    return (
        <div className={styles.buttons}>
            <div className={styles.negatives}>
                {negativeRange.reverse().map(el => <button key={-el}
                                                     onClick={() => onButtonClick(-el)}
                                                     className={styles.button}>
                    {-el}
                </button>)}</div>
            <span className={styles.number}>{resultNumb}</span>
            <div className={styles.positives}>
                {positiveRange.reverse().map(el => <button key={el}
                                                     onClick={() => onButtonClick(el)}
                                                     className={styles.button}>
                    +{el}
                </button>)}
            </div>
        </div>

    );
}

export default Buttons;