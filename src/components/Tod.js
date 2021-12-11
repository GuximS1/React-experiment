import React, { useState } from 'react'
import Compelted from './Compelted';


const Tod = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const checkedHandler = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setIsChecked(true)
        } else {
            setIsChecked(false);
        }
    };
    return (
        <div className='card'>
            <div className='card1'>
                <h2 style={{ textAlign: 'center' }}>{props?.data?.title}</h2>
                <div className='actions'>
                    <input type="checkbox" id={props.id} onClick={(e) => {
                        checkedHandler(e);
                    }} />
                    <button className='btnDelete' onClick={() => {
                        props.deleteHandler(props.id);
                        document.getElementById(`${props.id}`).checked = false;
                    }}>Delete</button>
                </div>
            </div>
            {isChecked &&
                <div className='card2' >
                    <Compelted />
                </div>
            }
        </div>
    )
}

export default Tod
