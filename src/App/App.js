import React, {useState} from 'react';
import styles from './App.module.css'

function App() {
    const [buttons, setButtons] = useState([]);
    const [resultNumb, setResultNumber] = useState(0);
    const [value, setValue] = useState('');
    const [minRange, setMinRange] = useState({min: ''});
    const [maxRange, setMaxRange] = useState({max: ''});

    const onChangeMinRange = (e) => {
        setMinRange({[e.target.name]: +e.target.value});
    };
    const onChangeMaxRange = (e) => {
        setMaxRange({[e.target.name]: +e.target.value});
    };
    const onButtonClick = (e) => {
        setResultNumber(resultNumb + +e);
    };
    const onSubmitRange = (e) => {
        e.preventDefault();
        const min = minRange['min'];
        const max = maxRange['max'];
        console.log('min: ', min);
        console.log('max: ', max);


        if (min < max) {
            let arr = [];
            for (let i = min; i <= max; i++) {
                arr.push(i);
            }
            setButtons(arr);
        }
    };
    const onReset = () => {
        setMinRange({'min': ''});
        setMaxRange({'max': ''});
        setResultNumber(0);
        setButtons([]);
        setValue(value + '');
    };

    return (
        <main className={styles.app}>
            <div className={styles.container}>
                <h1> Enter your range from 1 to 10 </h1>
                <form className={styles.counter} onSubmit={onSubmitRange}>
                    <div className={styles.inputs}>
                        <input type="text" name='min' value={minRange.min}
                               onChange={onChangeMinRange}/>
                        <input type="text" name='max' value={maxRange.max}
                               onChange={onChangeMaxRange}/>
                    </div>
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
                            </button>)}</div>
                    </div>
                    <input type="submit" value='' className={styles.submit}/>
                </form>
                <button key={345} onClick={() => onReset()} className={styles.reset}> RESET</button>
            </div>

        </main>
    );
}

export default App;
