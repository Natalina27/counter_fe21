import React, {useState} from 'react';
import styles from './App.module.css';
import Counter from "../Counter/Counter";
import TotalCounter from "../TotalCounter/TotalCounter";


function App() {

    const [resultNumb, setResultNumber] = useState(0);
    const [value, setValue] = useState('');
    const [minRange, setMinRange] = useState({min: ''});
    const [maxRange, setMaxRange] = useState({max: ''});
    const [buttons, setButtons] = useState([]);

    const initialCounters = [
        {id: 123, name: 'Counter 1', value: 0},
        {id: 234, name: 'Second', value: 0}
    ];

    const [counters, setCounters] = useState(initialCounters);

    const resetTotalCount = () => {
        console.log('reset');
        const newCounters = counters.map(el => ({ ...el, value:0 }));
        setCounters(newCounters);
    };

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
            <h1>COUNTERS</h1>
            <TotalCounter counters={counters} reset={resetTotalCount} />
            {counters.map(el =>
                <Counter key={el.id}
                         buttons={buttons}
                         onButtonClick={onButtonClick}
                         onChangeMinRange={onChangeMinRange}
                         onChangeMaxRange={onChangeMaxRange}
                         onSubmitRange={onSubmitRange}
                         onReset={onReset}
                         minRange={minRange}
                         maxRange={maxRange}
                         resultNumb={resultNumb}
                />
            )}

        </main>
    );
}

export default App;
