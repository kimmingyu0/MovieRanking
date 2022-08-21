import style from "../Movie.module.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({id, medium_cover_image,title,genres,year}){
    return <div className={style.MovieBox}>
        <h1>포스터 이미지</h1>
        <img src={medium_cover_image} alt={title} className={style.MainImg}/>
        <div>
            <h2>
                {title}
            </h2>
            <h2>장르</h2>
            <ul>
                {genres.map(g =>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <h2>출시년도</h2>
            <p>{year}</p>
        </div>
        <p>
            <Link to={'/'}><button>돌아가기</button></Link>
        </p>

    </div>;
}

MovieDetail.propTypes = {
    id:PropTypes.number.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    year : PropTypes.number.isRequired
}

export default MovieDetail;