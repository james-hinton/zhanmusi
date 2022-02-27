import Image from "./Image";
import NavLink from "./NavLink";

import "../assets/styles/Footer.css";

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
      </div>
    </>
  );
};

export default Footer;
