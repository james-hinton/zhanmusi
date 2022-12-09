// Images
import ProfileImg from "../../../../assets/images/profile.jpeg";

// Styles
import "./style.scss";

const Tweet = () => {
  return (
    <>
      <div className="twitter-tweet">
        <div className="twitter-tweet-container">
          <div className="twitter-tweet-avatar">
            <img src={ProfileImg} alt="Profile" />
          </div>
          <div className="twitter-tweet-content">
            <input
              type="text"
              placeholder="What's happening?"
              className="twitter-tweet-content-input"
            />
          </div>
        </div>
        <div className="twitter-tweet-footer">
          <div className="twitter-tweet-footer-tweet">Tweet</div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
