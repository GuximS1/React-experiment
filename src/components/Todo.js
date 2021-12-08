import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';
function Todo(props) {

    const [openModal, setOpenModal] = useState(false);

    function deleteHandler() {
        setOpenModal(true);
    }
    function closeModalHandler() {
        setOpenModal(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {openModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {openModal && <Backdrop closeModal={closeModalHandler} />}
        </div>
    );

}
export default Todo;