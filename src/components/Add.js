import React from 'react'

const Add = (props) => {

    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div>
            <div className='modal'>
                <p>New Goal</p>
                <div>
                    <input type="text" size={45} />
                </div>
                <br />
                <div className="btngroup">
                    <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
                    <input className='btn' type='submit' onClick={confirmHandler} />
                </div>
            </div>
        </div>
    )
}

export default Add
