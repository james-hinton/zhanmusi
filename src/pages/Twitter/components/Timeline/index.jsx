// Components
import Post from "./components/Post";
import ProfileImg from "../../../../assets/images/profile.jpeg";

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
    avatar: ProfileImg,
    verified: false,
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
  {
    id: 3,
    name: "National Aeronautics and Space Administration",
    username: "NASA",
    followers: 8394389433,
    following: 1290129012,
    activelyFollowing: false,
    avatar: "/twitter/avatars/nasa.png",
    verified: true,
  },
];

const tweets = [
  {
    id: 1,
    user: 1,
    text: "Just added a new project to my portfolio: 'Terraforming Mars for Dummies.' The first step is apparently to invent a time machine.",
    likes: 2331,
    retweets: 2231,
    replies: 9,
    createdAt: "2022-12-03T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
    createdAt: "2022-12-07T00:00:00.000Z",
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
  // Reply to 3 from NASA
  {
    id: 5,
    user: 3,
    text: "@jameshinton We're looking for a developer too, want to join?",
    likes: 11221,
    retweets: 25121,
    replies: 12,
    createdAt: "2022-11-01T00:00:00.000Z",
    replyTo: 3,
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
