import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome React Projects</h1>
      <ul>
        <li>
          <Link to="/todolist">To Do List Project</Link>
        </li>
        <li>
          <Link to="/cointracker">CoinTracker Project</Link>
        </li>
        <li>
          <Link to="/movies">MovieApp Projec</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
