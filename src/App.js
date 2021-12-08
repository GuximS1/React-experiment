import React from "react";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
function App() {
  return (
    <div>
      <div className='header'>
        <h1>My Todos ✅</h1>
        <button className="goalbtn">+Add Goal</button>
      </div>
      <hr style={{ width: '98%', height: '5px', background: "lightgray" }} />
      <Todo />
    </div >
  );
}

export default App;
