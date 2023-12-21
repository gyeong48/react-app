import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image}></img>
          <h1>{movie.title_long}</h1>
          <p>rating: {movie.rating}</p>
          <p>runtime: {movie.runtime}min</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
