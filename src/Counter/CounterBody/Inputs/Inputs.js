import React from 'react';
import styles from './Inputs.module.css';


function Inputs(
    { minRange, maxRange, onChangeMinRange, onChangeMaxRange }
) {
    return (

        <div className={styles.inputs} >
            <input type="text"
                   name='min'
                   value={minRange.min}
                   onChange={onChangeMinRange}/>
            <input type="text"
                   name='max'
                   value={maxRange.max}
                   onChange={onChangeMaxRange}/>
        </div>
    );
}

export default Inputs;