import React, {useState} from 'react';
import styles from './App.module.css';
import Counter from "../Counter/Counter";


function App() {

    const [resultNumb, setResultNumber] = useState(0);
    const [value, setValue] = useState('');
    const [minRange, setMinRange] = useState({min: ''});
    const [maxRange, setMaxRange] = useState({max: ''});
    const [buttons, setButtons] = useState([]);

    const onButtonClick = (e) => {
        setResultNumber(resultNumb + +e);
    };
    const onChangeMinRange = (e) => {
        setMinRange({[e.target.name]: +e.target.value});
    };
    const onChangeMaxRange = (e) => {
        setMaxRange({[e.target.name]: +e.target.value});
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
            <Counter buttons={buttons}
                     onButtonClick={onButtonClick}
                     onChangeMinRange={onChangeMinRange}
                     onChangeMaxRange={onChangeMaxRange}
                     onSubmitRange={onSubmitRange}
                     onReset={onReset}
                     minRange={minRange}
                     maxRange={maxRange}
                     resultNumb={resultNumb}
            />
        </main>
    );
}

export default App;
