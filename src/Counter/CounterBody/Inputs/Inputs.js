import React from 'react';
import styles from './Inputs.module.css'


function Inputs(
    {onSubmitRange, minRange, maxRange, onChangeMinRange, onChangeMaxRange }
) {
    return (

        <form className={styles.inputs}  onSubmit={onSubmitRange}>
            <input type="text" name='min'
                   value={minRange.min}
                   onChange={onChangeMinRange}/>
            <input type="text"
                   name='max'
                   value={maxRange.max}
                   onChange={onChangeMaxRange}/>
            <input type="submit"
                   value=''
                   className={styles.submit}/>
        </form>

    );
}

export default Inputs;
