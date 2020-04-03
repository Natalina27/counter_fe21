import React, {useState} from 'react';

function Btn(props) {

    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked(!clicked);
        props.childClicked();
    };

    return (
        <button onClick={clickHandler}>
            {
                clicked ? '+' : ''
            }
            { props.item}
        </button>
    );
}

export default Btn;
