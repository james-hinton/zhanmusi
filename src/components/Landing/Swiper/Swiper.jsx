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
