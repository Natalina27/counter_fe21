import React, {useState} from 'react';
import styles from './App.module.css'

function App() {
    const [buttons, setButtons] = useState([]);
    const [resultNumb, setResultNumber] = useState(0);
    const [range, setRange] = useState(
        {
            lower: 0,
            upper: 0
        }
    );

    const onChange = (e) => {
        setRange({...range, [e.target.name]: +e.target.value});
        console.log('range  :', range);
        console.log('e  :', e);
    };
    const onButtonClick = (e) => {
        setResultNumber(resultNumb + +e);

        console.log('setResultNumber :', setResultNumber);
        console.log('e  :', e);

    };


    const onSubmitRange = (e) => {
        e.preventDefault();
        const minRange = range["lower"];
        const maxRange = range["upper"];
        console.log('minRange: ',minRange );
        console.log('maxRange: ',maxRange );

        if (minRange < maxRange) {
            let arr = [];
            for (let i = minRange; i <= maxRange; i++) {
                arr.push(i);
            }
            setButtons(arr);
            console.log('setButtons(arr) : ',arr);

        }
    };


    const onReset = () => {
        setResultNumber(0);
        setRange({ lower: 0, upper: 0},);
        console.log(setRange);
        setButtons([]);
        console.log(setButtons);
    };


    return (
        <main className={styles.app}>
            <div className={styles.container}>
                <h1> Enter your range from 1 to 10 </h1>
                <form className={styles.counter}  onSubmit={onSubmitRange}>
                    <div className={styles.inputs}>
                        <input type="text" name="lower" onChange={onChange}/>
                        <input type="text" name="upper" onChange={onChange}/>
                    </div>
                    <button  key={123} onClick={onSubmitRange} className={styles.submit}> SUBMIT </button>
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
                    <button  key={345} onClick={() => onReset()} className={styles.reset}> RESET </button>

                </form>
            </div>

        </main>
    );
}

export default App;
