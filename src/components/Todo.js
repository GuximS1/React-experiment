import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';
import { Goal } from '../database/database';
function Todo(props) {

    const [openModal, setOpenModal] = useState(false);

    function deleteHandler() {
        setOpenModal(true);
    }
    function closeModalHandler() {
        setOpenModal(false);
    }

    return (
        <div className='positioning'>
            {Goal.map((data, key) => {
                return (
                    <div key={key} className='card'>
                        <h2 style={{ textAlign: 'center' }}>{data.title}</h2>
                        <div className='actions'>
                            <h2 className='cb'>Completed<input type="checkbox" /></h2>
                            <button className='btnDelete' onClick={deleteHandler}>Delete</button>
                        </div>
                        {openModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
                        {openModal && <Backdrop closeModal={closeModalHandler} />}
                    </div>
                );
            })}
        </div>
    );

}
export default Todo;