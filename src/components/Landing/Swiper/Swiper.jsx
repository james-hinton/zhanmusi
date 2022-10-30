import ProfileImg from "../../../assets/images/profile.jpeg";
import Like from "../../../assets/images/swipey/like.png";
import Dislike from "../../../assets/images/swipey/dislike.png";
import Heart from "../../../assets/images/swipey/heart.png";
import SadImg from "../../../assets/images/swipey/sad.png";
import HappyImg from "../../../assets/images/swipey/happy.png";
import SuperSadImg from "../../../assets/images/swipey/supersad.png";
import SuperHappyImg from "../../../assets/images/swipey/superhappy.png";
import "./style.scss";
import Draggable from "react-draggable";
// Swiper is a tinder clone
const Swiper = () => {
  const onStart = (e) => {
    //console.log("onStart", e);
  };
  const onStop = (e, position) => {
    //  If x is smaller than -100 but bigger than -500
    if (position.x < -100 && position.x > -500) {
      document.getElementById("profile").src = SadImg;
    } else if (position.x < -500) {
      document.getElementById("profile").src = SuperSadImg;
    } else if (position.x > 100 && position.x < 500) {
      document.getElementById("profile").src = HappyImg;
    } else if (position.x > 500) {
      document.getElementById("profile").src = SuperHappyImg;
    } else {
      document.getElementById("profile").src = ProfileImg;
    }
    const heart = document.getElementById("heart");
    const cross = document.getElementById("cross");
    heart.style.opacity = 0;
    cross.style.opacity = 0;
  };
  const onDrag = (e, position) => {
    const heart = document.getElementById("heart");
    const cross = document.getElementById("cross");
    heart.style.opacity = position.x / 250;
    cross.style.opacity = position.x / -250;
  };
  const dragHandlers = { onStart: onStart, onStop: onStop, onDrag: onDrag };
  return (
    <div className="swiper-container">
      <Draggable
        {...dragHandlers}
        position={{ x: 0, y: 0 }}
        handle="#handle"
        axis="x"
      >
        <div id="swiper" className="swiper">
          <div className="swiper__card">
            <div className="swiper__card__top" id="handle">
              <img
                src={ProfileImg}
                alt="profile"
                draggable="false"
                id="profile"
              />
              <img
                src={Heart}
                alt="heart"
                id="heart"
                draggable="false"
                className="swiper__card__icon"
              />
              <img
                src={Dislike}
                alt="cross"
                id="cross"
                draggable="false"
                className="swiper__card__icon"
              />
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
                Hi! I'm a Full Stack Software Developer for Spatial Days Ltd
                based in Hampshire.
                <br />
                <br />
                <div className="swiper__card__bottom__bio__key">
                  Nationality
                </div>
                <div className="swiper__card__bottom__bio__value">British</div>
                <br />
                <div className="swiper__card__bottom__bio__key">
                  Languages and Tools{" "}
                </div>
                <div className="swiper__card__bottom__bio__value">
                  Python, Javascript, C#, HTML5, CSS3, JQuery, Bootstrap, React,
                  TypeScript, AWS (EC2, RDS, S3, Boto3, EB), WordPress,
                  Tensorflow, Redis, RabbitMQ, Celery, SQLAlchemy, Dojo, Jinja2,
                  Linux, Docker, PostgreSQL/PostGIS
                </div>
              </span>
            </div>
          </div>
          <div className="swiper__buttons">
            <div className="swiper__button">
              <img
                src={Dislike}
                alt="dislike"
                onClick={() => {
                  const profile = document.getElementById("profile");
                  if (profile.src.includes(SadImg)) {
                    profile.src = SuperSadImg;
                  } else {
                    profile.src = SadImg;
                  }
                }}
              />
            </div>
            <div className="swiper__button">
              <img
                src={Like}
                alt="like"
                onClick={() => {
                  const profile = document.getElementById("profile");
                  if (profile.src.includes(HappyImg)) {
                    profile.src = SuperHappyImg;
                  } else {
                    profile.src = HappyImg;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};
export default Swiper;
