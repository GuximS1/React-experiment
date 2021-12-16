import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Tod from './Tod';
import Compelted from './Compelted';
function Todo({ db, deleteHandler }) {

    const [openModal, setOpenModal] = useState(false);

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