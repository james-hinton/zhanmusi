import { CloseOutlined, Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ProfileImg from "../../../assets/images/profile.jpeg";
import Like from "../../../assets/images/swipey/like.png";
import Dislike from "../../../assets/images/swipey/dislike.png";

import "./style.scss";

// Swiper is a tinder clone
const Swiper = () => {
  return (
    <div className="swiper">
      <div className="swiper__card">
        <div className="swiper__card__top">
          <img src={ProfileImg} alt="profile" />
        </div>
        <div className="swiper__card__bottom">
          <span>
            <span className="swiper__card__bottom__name">James Hinton</span>
            <span className="swiper__card__bottom__age">, 25</span>
          </span>
          <span className="swiper__card__bottom__location">
            Software Developer Based in Hampshire
          </span>
          <span className="swiper__card__bottom__bio">
            <strong>Hello!</strong>
            <br />
            <br />
            Hi! I'm a Full Stack Software Developer for Spatial Days Ltd based
            in Hampshire.
            <br />
            <br />
            <div className="swiper__card__bottom__bio__key">Nationality</div>
            <div className="swiper__card__bottom__bio__value">British</div>
            <br />
            <div className="swiper__card__bottom__bio__key">
              Languages and Tools{" "}
            </div>
            <div className="swiper__card__bottom__bio__value">
              Python, Javascript, C#, HTML5, CSS3, JQuery, Bootstrap, React,
              TypeScript, AWS (EC2, RDS, S3, Boto3, EB), WordPress, Tensorflow,
              Redis, RabbitMQ, Celery, SQLAlchemy, Dojo, Jinja2, Linux, Docker,
              PostgreSQL/PostGIS
            </div>
          </span>
        </div>
      </div>
      <div className="swiper__buttons">
        <div className="swiper__button">
          <img src={Dislike} alt="dislike" />
        </div>
        <div className="swiper__button">
          <img src={Like} alt="like" />
        </div>
      </div>
    </div>
  );
};

export default Swiper;
