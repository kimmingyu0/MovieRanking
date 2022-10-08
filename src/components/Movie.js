import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../Movie.module.css";

function Movie({ id, medium_cover_image, title }) {
  return (
    <div className={style.MainBox}>
      <Link to={`/movie/${id}`}>
        <img src={medium_cover_image} alt={title} className={style.MainImg} />
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,

};
export default Movie;
