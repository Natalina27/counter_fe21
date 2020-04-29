import React from 'react';
import styles from './CounterBody.module.css'
import Buttons from "./Buttons/Buttons";
import Inputs from "./Inputs/Inputs";


function CounterBody(
    { positiveRange, negativeRange , minRange, maxRange, onChangeMinRange, onChangeMaxRange, onButtonClick, resultNumb }
) {
    return (
        <div className={styles.counter}>
            <Inputs
                minRange={minRange}
                maxRange={maxRange}
                onChangeMinRange={onChangeMinRange}
                onChangeMaxRange={onChangeMaxRange}
                positiveRange={positiveRange}
                negativeRange={negativeRange}
            />
            <Buttons
                resultNumb={resultNumb}
                onButtonClick={onButtonClick}
                positiveRange={positiveRange}
                negativeRange={negativeRange}
            />
        </div>
    );
}

export default CounterBody;