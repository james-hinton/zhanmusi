// Components
import Post from "./components/Post";

// Styles
import "./style.scss";

const users = [
  {
    id: 1,

    name: "John Doe",
    username: "johndoe",
    followers: 100,
    following: 255,
    activelyFollowing: true,
    avatar:
      "http://localhost:3000/static/media/profile.4fb5d3dbaa07e588b2e4.jpeg",
    verified: true,
  },
];

const tweets = [
  {
    id: 1,
    user: 1,
    text: "This is a particularly long tweet that will showcase that this does in fact wrap, I guess there is still a 140 character limit though. Perhaps I should keep on going, or what? Who will stop me?",
    likes: 100,
    retweets: 255,
    replies: 0,
    createdAt: "2021-01-01T00:00:00.000Z",
    image: "/twitter/posts/test.jpeg",
  },
  {
    id: 2,
    user: 1,
    text: "Wow. This is the best clone ever, EVER!",
    likes: 11221,
    retweets: 25121,
    replies: 121212,
    createdAt: "2022-11-01T00:00:00.000Z",

  },
  {
    id: 3,
    user: 1,
    text: "Truth brings freedom",
    likes: 52323,
    retweets: 25121,
    replies: 121212,
    createdAt: "2022-01-01T00:00:00.000Z",
    image: "/twitter/posts/nasa.jpeg",
  },
  {
    id: 4,
    user: 1,
    text: "Wow. This is the best clone ever, EVER!",
    likes: 11221,
    retweets: 25121,
    replies: 121212,
    createdAt: "2022-11-01T00:00:00.000Z",

  },
  {
    id: 5,
    user: 1,
    text: "Wow. This is the best clone ever, EVER!",
    likes: 11221,
    retweets: 25121,
    replies: 121212,
    createdAt: "2022-11-01T00:00:00.000Z",

  },
  {
    id: 6,
    user: 1,
    text: "Wow. This is the best clone ever, EVER!",
    likes: 11221,
    retweets: 25121,
    replies: 121212,
    createdAt: "2022-11-01T00:00:00.000Z",

  },
];

const Timeline = () => {
  return (
    <div className="twitter-timeline">
      {tweets.map((tweet) => {
        return (
          <Post
            user={users.find((user) => user.id === tweet.user)}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
