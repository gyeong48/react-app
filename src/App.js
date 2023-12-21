import { useState, useEffect } from "react";

function App() {
  const [counter, setcounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setcounter((cur) => cur + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("i run when 'keyword & counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
