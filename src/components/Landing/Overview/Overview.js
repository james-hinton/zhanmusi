// Components
import Repo from "../Repo/Repo.js";
import Contributions from "../Contributions/Contributions.js";
import Projects from "../../../constants/Projects";

// Styles
import "./Overview.css";

const Overview = () => {
  return (
    <>
      <div className="repo__box">
        {Projects.map((project) => {
          return (
            <Repo
              key={project.title}
              project={project.title}
              priv={project.public ? "Public" : "Private"}
              about={project.description}
              language={project.language}
              image={project.image}
              link={project.link}
            />
          );
        })}

        <div className="repo__box--subtitle">
          <i>View projects tab for more...</i>
        </div>
      </div>

      <div className="repo__box contributions">
        <h4>Contributions</h4>

        <Contributions />
      </div>
    </>
  );
};

export default Overview;
