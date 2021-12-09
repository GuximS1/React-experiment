import React, { useState } from "react";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";
import Add from "./components/Add";
function App() {
  const [addModal, setAddModal] = useState(false);
  function addHandler() {
    setAddModal(true);
  }

  function closeModalHandler() {
    setAddModal(false);
  }
  return (
    <div>
      <div className='header'>
        <h1>My Todos ✅</h1>
        <button className="goalbtn" onClick={addHandler}>+Add Goal</button>
      </div>
      <hr style={{ width: '98%', height: '5px', background: "lightgray" }} />
      <Todo />
      {addModal && <Add onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {addModal && <Backdrop closeModal={closeModalHandler} />}
      <br /> <hr style={{ width: '98%', height: '5px', background: "lightgray" }} />
    </div >
  );
}

export default App;
