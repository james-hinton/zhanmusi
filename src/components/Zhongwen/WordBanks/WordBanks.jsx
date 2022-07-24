import "./WordBanks.scss";
const WordBanks = () => {
  let myBanks = [
    {
      name: "At the Restaurant",
      img: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 1,
    },
    {
      name: "At the Beach",
      img: "https://thumbs.dreamstime.com/b/two-women-relaxing-beach-talking-back-portrait-96799781.jpg",
      id: 2,
    },
    {
      name: "At the Park",
      img: "https://media.istockphoto.com/photos/couple-in-park-sitting-on-a-bench-talking-to-each-other-in-romantic-picture-id964062034?s=612x612",
      id: 3,
    },
  ];
  return (
    <>
      <div className="word-banks">
        {myBanks.map((bank) => {
          return (
            <div className="word-bank" key={bank.id}>
              <div className="word-bank--title">{bank.name}</div>
              <div className="word-bank--img">
                <img src={bank.img} alt={bank.name} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WordBanks;
