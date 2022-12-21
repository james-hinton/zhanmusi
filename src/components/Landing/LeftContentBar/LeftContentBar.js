import { useEffect, useState } from "react";
import Image from "../../Generic/Image/Image";
import Button from "../../Generic/Button/Button";
import InfoPanel from "../InfoPanel/InfoPanel";
import { capitalizeFirstLetter } from "../../../utils/utils";
import "./LeftContentBar.css";

const LeftContentBar = ({ pokeData }) => {
  const [image, setImage] = useState(
    "https://avatars.githubusercontent.com/u/63542818?v=4"
  );
  const [emoji, setEmoji] = useState("😎");
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);

  const [name, setName] = useState("James Hinton");
  const [abilities, setAbilities] = useState(null);

  useEffect(() => {
    setName("James Hinton");
    setAbilities(null);
    if (pokeData && pokeData.data) {
      var abilitiesList = [];
      pokeData.data.abilities.map((e) => {
        abilitiesList.push(e.ability.name);
      });

      setAbilities(abilitiesList);

      setName(capitalizeFirstLetter(pokeData.data.species.name));
      setImage(pokeData.data.sprites.front_default);
    } else {
      setImage("https://avatars.githubusercontent.com/u/63542818?v=4");
    }
  }, [pokeData]);

  return (
    <>
      <div className="content__left">
        <div className="content__left--image">
          <Image image={image} circle margin={true} />

          <div
            className="content__left--emoji"
            onClick={() => {
              if (showEmojiSelector) {
                setShowEmojiSelector(false);
              } else {
                setShowEmojiSelector(true);
              }
            }}
          >
            {emoji}
          </div>
          {showEmojiSelector && (
            <div className="content__left--emoji-selector">
              {["😁", "😎", "🤓", "😙", "😀", "🌄"].map((e, i) => {
                return (
                  <div
                    className="content__left--emoji-selector--emoji"
                    key={i}
                    onClick={() => {
                      setEmoji(e);
                      setShowEmojiSelector(false);
                      // If its 🌄 then navigate to /mountains/
                      if (e === "🌄") {
                        window.location.href = "/mountains/";
                      }
                    }}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <h1>{name}</h1>
        <h3>james-hinton</h3>

        <div className="content__left--socials">
          <Image
            height={"30px"}
            image={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
            link={"https://github.com/james-hinton"}
            mood={"cool"}
          />
          <Image
            height={"30px"}
            image={"/twitter/logo-blue.png"}
            link={"/twitter/"}
            treasure={"Twitter"}
            mood={"cool"}
          />
          <Image
            height={"30px"}
            image={
              "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            }
            link={"https://www.linkedin.com/in/james-hinton-54bb87197/"}
            mood={"cool"}
          />
        </div>

        <Button text="Contact Me" contact className="content__left--button" />
        <div className="info">
          {abilities && (
            <InfoPanel
              title={"Abilities"}
              value={abilities.map((item, i) => (
                <li key={i}>{capitalizeFirstLetter(item)}</li>
              ))}
            />
          )}

          <InfoPanel
            title={"Current Position"}
            value={"Full Stack Software Developer, Spatial Days Ltd"}
          />

          <InfoPanel title="Nationality" value="British" link="/zhongwen/" />

          <InfoPanel
            title="Qualifications"
            value="M.Sc. Computing (Distinction)
                B.A. Business (Team Entrepreneurship)"
          />

          <InfoPanel
            title="Development Software/Tools:"
            value="Python, Javascript, C#, HTML5, CSS3, JQuery, Bootstrap,  React, TypeScript, AWS (EC2, RDS, S3, Boto3, EB), WordPress, Tensorflow, Redis, RabbitMQ, Celery, SQLAlchemy, Dojo, Jinja2, Linux, Docker"
          />

          <InfoPanel
            title="Database Software:"
            value="            
                    PostgreSQL/PostGIS, MySQL"
          />

          <InfoPanel
            title="GIS Software"
            value="ESRI ArcGIS Enterprise Portal, QGIS, GeoServer"
          />

          <InfoPanel title="Other Software" value="BalsamiQ, Draw.io" />

          <InfoPanel
            title="Hobbies"
            value={
              <>
                <a
                  href="/popcorn"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Popcorn, {" "}
                </a>
                <a
                  href="/bar"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Bar
                </a>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default LeftContentBar;
