import React, { useState } from 'react'

const Add = (props) => {

    const [inputs, setInputs] = useState();

    const handleChange = (event) => {
        const value = event.target.value;
        setInputs(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        props.onConfirm(inputs);
        props.onCancel();
    };

    return (
        <form className='modal' onSubmit={handleSubmit}>
            <p>New Goal</p>
            <div>
                <input type="text" size={45} onChange={handleChange} />
            </div>
            <br />
            <div className="btngroup">
                <button className='btn btn--alt'  >Cancel</button>
                <input className='btn' type='submit' />
            </div>
        </form>
    )
}

export default Add
