// Components
import Post from "./components/Post";

// Styles
import "./style.scss";

const users = [
  {
    id: 1,

    name: "James Hinton",
    username: "jameshinton",
    followers: 100,
    following: 255,
    activelyFollowing: true,
    avatar:
      "http://localhost:3000/static/media/profile.4fb5d3dbaa07e588b2e4.jpeg",
    verified: true,
  },
  {
    id: 2,
    name: "Elon Musk",
    username: "elonmusk",
    followers: 8394389433,
    following: 1290129012,
    activelyFollowing: false,
    avatar: "/twitter/avatars/elon.jpg",
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
    user: 2,
    text: "@jameshinton want to colab? I'm looking for a developer, mine have left me!",
    likes: 11221,
    retweets: 25121,
    replies: 121212,
    createdAt: "2022-11-01T00:00:00.000Z",
  },
  {
    id: 3,
    user: 1,
    text: "@elonmusk Thanks man, but I'm not interested.",
    likes: 52323,
    retweets: 121,
    replies: 122,
    createdAt: "2022-12-09T00:00:00.000Z",
    replyTo: 2,
  },
  {
    id: 3,
    user: 1,
    text: "This JWT thing is pretty cool, I wonder if I can clone this too?",
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
];

const Timeline = () => {
  const hasThisTweetGotAReply = (id) => {
    return tweets.find((tweet) => tweet.replyTo === id);
  };

  return (
    <div className="twitter-timeline">
      {tweets.map((tweet) => {
        const repliedTweet = hasThisTweetGotAReply(tweet.id);
        return (
          <Post
            user={users.find((user) => user.id === tweet.user)}
            tweet={tweet}
            // Look through the other tweets and if theres a reply to that ID
            // then return that tweet
            reply={
              repliedTweet && {
                tweet: repliedTweet,
                user: users.find((user) => user.id === repliedTweet.user),
              }
            }
          />
        );
      })}
    </div>
  );
};

export default Timeline;
