import React from 'react';
import styles from './CounterBody.module.css'
import Buttons from "./Buttons/Buttons";
import Inputs from "./Inputs/Inputs";


function CounterBody(
    { onSubmitRange, minRange, maxRange, onChangeMinRange, onChangeMaxRange, buttons, onButtonClick, resultNumb }
    ) {
    return (
                <div className={styles.counter}>
                   <Inputs
                       onSubmitRange={onSubmitRange}
                       minRange={minRange}
                       maxRange={maxRange}
                       onChangeMinRange={onChangeMinRange}
                       onChangeMaxRange={onChangeMaxRange}
                   />
                   <Buttons buttons={buttons}
                            resultNumb={resultNumb}
                            onButtonClick={onButtonClick}
                   />
                </div>
    );
}

export default CounterBody;
