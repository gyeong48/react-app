import { Routes, Route } from "react-router-dom";
import ToDoList from "./routes/ToDoList";
import CoinTraker from "./routes/CoinTracker";
import Home from "./routes/Home";
import MovieApp from "./routes/MovieApp";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/todolist" element={<ToDoList />}></Route>
      <Route path="/cointracker" element={<CoinTraker />}></Route>
      <Route path="/movies/:id" element={<MovieDetail />}></Route>
      <Route path="/movies" element={<MovieApp />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
