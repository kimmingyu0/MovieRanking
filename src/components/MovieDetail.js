import style from "./MovieDetail.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function MovieDetail({
  medium_cover_image,
  title,
  genres,
  year,
  description,
}) {
  return (
    <React.Fragment>
      <div className={style.all}>
        <div>
          <img
            src={medium_cover_image}
            alt={title}
            className={style.DetailImg}
          />
        </div>
        <div className={style["info-body"]}>
          <h2>{title}</h2>
          <div className={style.description}>
            <div>{description}</div>
          </div>

          <h2>장르</h2>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <h2>출시년도</h2>
          <p>{year}</p>

          <p>
            <Link to={"/"}>
              <button>돌아가기</button>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

MovieDetail.propTypes = {

  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieDetail;
