import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../Movie.module.css";

function Movie({ id, medium_cover_image, title }) {
  return (
    <div className={style.MainBox}>
      <div className={style.card}>
        <div className={style.cardimage}>
          <img src={medium_cover_image} alt={title} className={style.MainImg} />
        </div>
        <div className={style.DetailBoard}>
          <Link to={`/movie/${id}`}  style={{ textDecoration: 'none' }}>
            <button>상세정보</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Movie;
