import React, {useState} from 'react';
import styles from './App.module.css'

function App() {
    const [buttons, setButtons] = useState([]);
    const [resultNumb, setResultNumber] = useState(10);
    const [range, setRange] = useState(
        {
            lower: 0,
            upper: 0
        }
    );

    const onChange = (e) => {
        setRange({...range, [e.target.name]: e.target.value});
    };

    const onSubmitRange = (e) => {
        e.preventDefault();
        const minRange = range["lower"];
        const maxRange = range["upper"];
        if (minRange < maxRange) {
            let arr = [];
            for (let i = minRange; i <= maxRange; i++) {
                arr.push(i);
            }

            setButtons(arr);
        }
    };

    const onButtonClick = (e) => {
        setResultNumber(resultNumb + +e);
    };

    return (
        <main className={styles.app}>
            <div className={styles.container}>
                <h1> Enter your range from 1 to 5 </h1>
                <form className={styles.counter} >
                    <div className={styles.inputs}>
                        <input type="text" name="lower" onChange={onChange}/>
                        <input type="text" name="upper" onChange={onChange}/>
                    </div>
                    <button  key={123} onClick={onSubmitRange}> </button>
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
                                {el}
                            </button>)}</div>
                    </div>

                </form>
            </div>

        </main>
    );
}

export default App;
