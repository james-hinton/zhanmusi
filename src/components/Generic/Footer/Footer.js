// Components
import Image from "../Image/Image";
import NavLink from "../../Navbar/Navbar/NavLink";
import WorkAvailable from "./components/WorkAvailable";
import TreasureChest from "./components/TreasureChest";

// Styles
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content-left">
            <div className="footer__content-left--item">
              <NavLink text={"James"} dark />
            </div>
            <div className="footer__content-left--item">
              <NavLink text={"Portfolio"} dark />
            </div>
            <div className="footer__content-left--item">
              <NavLink text={"Experience"} dark />
            </div>
          </div>

          <div className="footer__content-logo">
            <Image
              height={"30px"}
              image={
                "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              }
            />
          </div>

          <div className="footer__content-right">
            <div className="footer__content-right--item">
              <NavLink text={"About"} dark />
            </div>
            <div className="footer__content-right--item">
              <NavLink text={"More"} dark />
            </div>
            <div className="footer__content-right--item">
              <NavLink text={"Disclaimer"} dark />
            </div>
          </div>
        </div>
        <TreasureChest />
        <WorkAvailable />
      </div>
    </>
  );
};

export default Footer;
