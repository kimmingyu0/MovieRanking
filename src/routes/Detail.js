import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieDetail from "../components/MovieDetail";
import Loading from "../UI/Loading";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json.data.movie);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  let page;

  if (loading) {
    page = (
      <div className="centered">
        <Loading />
      </div>
    );
  } else {
    page = (
      <div>
        <MovieDetail
          key={movies.id}
          id={movies.id}
          medium_cover_image={movies.medium_cover_image}
          bgImg={movies.background_image}
          title={movies.title}
          description={movies.description_full}
          genres={movies.genres}
          year={movies.year}
        />
      </div>
    );
  }

  return (
    <div>
      {page}
    </div>
  );
}

export default Detail;
