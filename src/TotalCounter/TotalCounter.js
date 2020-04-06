import React from "react";
import styles from './TotalCounter.module.css';
import ResetAllCounters from "./ResetAllCounters/ResetAllCounters";

function TotalCounter({ counters, reset }) {
    return (
        <div className={styles.totalCounters}>
            <span>TOTAL { counters.reduce((a, b) => a + b.value, 0)}</span>
            <ResetAllCounters reset={reset} />
        </div>
    );
}

export default TotalCounter;