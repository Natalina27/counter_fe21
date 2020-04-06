import React from 'react';
import styles from './Counter.module.css';
import Header from "./Header/Header";
import CounterBody from "./CounterBody/CounterBody";
import Reset from "./Reset/Reset";


function Counter(
    { buttons, minRange, maxRange, onChangeMinRange, onChangeMaxRange, onSubmitRange, onButtonClick, resultNumb, onReset}
    ) {

    return (
            <div className={styles.container}>
                <Header />
                <CounterBody
                    buttons={buttons}
                    minRange={minRange}
                    maxRange={maxRange}
                    onChangeMinRange={onChangeMinRange}
                    onChangeMaxRange={onChangeMaxRange}
                    onSubmitRange={onSubmitRange}
                    onButtonClick={onButtonClick}
                    resultNumb={resultNumb}
                />
                 <Reset key={345}
                       onReset={onReset}
                />
            </div>
    );
}

export default Counter;
