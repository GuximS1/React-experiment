import React, { useState } from 'react'
import Backdrop from './Backdrop';
import { Goal } from '../database/database';
import Tod from './Tod';
function Todo(props) {

    const [openModal, setOpenModal] = useState(false);
    const [db, setDb] = useState([...Goal])
    function deleteHandler(index) {
        setDb((prev) => prev.filter((val) => val.id !== index));
    }
    function closeModalHandler() {
        setOpenModal(false);
    }

    return (
        <div className='positioning'>
            {db?.map((data) => {
                return (
                    <Tod key={data.id} data={data} deleteHandler={deleteHandler} id={data.id} />
                );
            })}

        </div>
    );

}
export default Todo;