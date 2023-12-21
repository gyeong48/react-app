import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [value, setValue] = useState("xx");
  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h1>Welcome React Projects</h1>
      <select onChange={onChange} value={value}>
        <option value={"xx"}>Select Project</option>
        <option value={"0"}>To Do List</option>
        <option value={"1"}>Coin Tracker</option>
        <option value={"2"}>Movie App</option>
      </select>
      <hr />
      {value === "0" ? <ToDoList /> : null}
    </div>
  );
}

export default App;
