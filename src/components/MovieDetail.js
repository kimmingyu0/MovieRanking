import "../css/MovieDetail.css";
import PropTypes from "prop-types";
import React from "react";

function MovieDetail({ medium_cover_image, title, genres, year, description }) {
  return (
    <React.Fragment>
      <div id="detail-body">
        <div id="cover-img">
          <img src={medium_cover_image} alt={title} />
        </div>
        <div id="info-body">
          <div id="title">
            <span>{title}</span>
          </div>
          <div id="genres">
            <h4>장르</h4>
            <div>{genres.map((item) => `${item}`).join(`/`)}</div>
            <h4>출시년도</h4>
            <p>{year}</p>
          </div>
          <div id="description">
            <div>{description}</div>
          </div>
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
