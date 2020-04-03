import React, {useState} from 'react';
import Btn from './Btn';

function App() {

    const [todo, setTodo] = useState('Hi');

    const boom = (n) => {
        console.log(n);
        console.log(todo);
    };

    const menu = [
        'Go 1',
        'Go 2',
        'Go 3',
        'Go 4',
    ];

    const todoChange = (e) => {
        console.log('change' + e.target.value);
        setTodo(e.target.value);
    };

     const childButtonClicked = () => {
        console.log('childButtonClicked');

     };

    return (
        <div className="App">
            <div className="container">
                <h1> My counter </h1>
                <input
                    type="text"
                    placeholder="Enter initial number"
                    number={(e) =>e.target.value}
                />
                <div className="counter">
                    <div><button> - </button></div>
                    <span>{number}</span>
                    <div><button> - </button></div>
                </div>
            </div>




            -{todo}-
            <input type="text" onChange={todoChange}/>
            {menu.map(el => <Btn key={el} item={el} childClicked={childButtonClicked} />)}
            {/*{menu.map(el => <button key={el} onClick={() => boom(el)}>Go1</button>)}*/}
            <button onClick={()=> boom(-1)}>-1</button>
            <button onClick={()=> boom(-2)}>-2</button>
            <button onClick={()=> boom(-5)}>-5</button>
        </div>
    );
}

export default App;
