import { useEffect, useState } from "react";
import Image from "./Image";
import Button from "./Button";
import InfoPanel from "./InfoPanel";
import capitalizeFirstLetter from "../utils/utils";
import "../assets/styles/LeftContentBar.css";

const LeftContentBar = ({ pokeData }) => {
  const [image, setImage] = useState(
    "https://avatars.githubusercontent.com/u/63542818?v=4"
  );
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
          <Image
            image={image} //https://media-exp1.licdn.com/dms/image/C4E03AQHAr70_C9qu6w/profile-displayphoto-shrink_800_800/0/1631627034390?e=1639612800&v=beta&t=iEPV9Yiw05DHksthq9cvj-4Re8AVvRW8wrjWsddLptc
            circle
            margin={true}
          />
        </div>

        <h1>{name}</h1>
        <h3>james-hinton</h3>

        <Button text="Contact Me" />

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
            value={"Software Developer, Spatial Days Ltd"}
          />

          <InfoPanel title="Nationality" value="British" />

          <InfoPanel
            title="Qualifications"
            value="M.Sc. Computing (Distinction)
                B.A. Business (Team Entrepreneurship)"
          />

          <InfoPanel
            title="Development Software/Tools:"
            value="Python, HTML5, CSS3, Javascript, JQuery, Bootstrap,  React, TypeScript, WordPress, Tensorflow, Redis, RabbitMQ, Celery, SQLAlchemy, Dojo, Jinja2, Linux, Docker"
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
        </div>
      </div>
    </>
  );
};

export default LeftContentBar;
