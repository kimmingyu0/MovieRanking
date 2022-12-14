import "../css/MovieDetail.css";
import React from "react";

function MovieDetail({
  medium_cover_image,
  bgImg,
  title,
  genres,
  year,
  description,
}) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('${bgImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
    </div>
  );
}

export default MovieDetail;
