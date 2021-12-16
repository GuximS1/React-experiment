import React, { useState } from "react";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";
import Add from "./components/Add";
import { Goal } from './database/database';
function App() {
  const [addModal, setAddModal] = useState(false);
  function addHandler() {
    setAddModal(true);
  }

  function closeModalHandler() {
    setAddModal(false);
  }
  const [db, setDb] = useState([...Goal])
  function deleteHandler(index) {
    setDb((prev) => prev.filter((val) => val.id !== index));
  }
  const addHandlerItem = (item) => {
    setDb((prev) => [...prev, {
      title: item,
      id: Math.random() * 1000000000 + item,
    }])
  }
  return (
    <div>
      <div className='header'>
        <h1>My Todos ✅</h1>
        <button className="goalbtn" onClick={addHandler}>+Add Goal</button>
      </div>
      <hr style={{ width: '98%', height: '5px', background: "lightgray" }} />
      <Todo deleteHandler={deleteHandler} db={db} />
      {addModal && <Add onCancel={closeModalHandler} onConfirm={addHandlerItem} />}
      {addModal && <Backdrop closeModal={closeModalHandler} />}
      <br /> <hr style={{ width: '98%', height: '5px', background: "lightgray" }} />
    </div >
  );
}

export default App;
