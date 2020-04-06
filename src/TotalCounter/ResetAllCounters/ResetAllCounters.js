import React from "react";
import styles from './ResetAllCounters.module.css';

function ResetAllCounters({ reset }) {
    return (
            <button onClick={() => reset()}
                    className={styles.reset}>
                RESET ALL COUNTERS
            </button>
    );
}
export default ResetAllCounters;