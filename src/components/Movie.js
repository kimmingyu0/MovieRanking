import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Movie.css";

function Movie({ id, medium_cover_image, title }) {
  return (
    <React.Fragment>
    <div key={id} id="movie-box">
      <div>
        <Link to={`/movie/${id}`}>
          <img
            style={{ borderRadius: "10px" }}
            src={medium_cover_image}
            alt={title}
          />
        </Link>
      </div>
    </div>
    </React.Fragment>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Movie;
