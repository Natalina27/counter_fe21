import React from 'react';
import styles from './Counter.module.css';
import Header from "./Header/Header";
import CounterBody from "./CounterBody/CounterBody";
import Reset from "./Reset/Reset";


function Counter(
    { positiveRange, negativeRange,
        minRange, maxRange,
        onChangeMinRange, onChangeMaxRange,
        onButtonClick, resultNumb, onReset}
    ) {

    return (
            <div className={styles.container}>
                <Header />
                <CounterBody
                    positiveRange={positiveRange}
                    negativeRange={negativeRange}
                    minRange={minRange}
                    maxRange={maxRange}
                    onChangeMinRange={onChangeMinRange}
                    onChangeMaxRange={onChangeMaxRange}
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
