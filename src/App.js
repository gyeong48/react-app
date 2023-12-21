import { element } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentToDos) => [toDo, ...currentToDos]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button type="submit">Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
