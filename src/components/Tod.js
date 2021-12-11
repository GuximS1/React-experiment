import React from 'react'
import Compelted from './Compelted';
const Tod = (props) => {
    return (
        <div className='card'>
            <div className='card1'>
                <h2 style={{ textAlign: 'center' }}>{props?.data?.title}</h2>
                <div className='actions'>
                    <input type="checkbox" id={props.id} />
                    <button className='btnDelete' onClick={() => {
                        props.deleteHandler(props.id);
                        document.getElementById(`${props.id}`).checked = false;
                    }}>Delete</button>
                </div>
            </div>
            <div className='card2' >
                <Compelted />
            </div>
        </div>
    )
}

export default Tod
