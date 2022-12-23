// Components
import Overview from "../Overview/Overview";
import Experience from "../Experience/Experience";
import About from "../About/About";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { isMobile } from "react-device-detect";

// Styles
import "react-tabs/style/react-tabs.css";
import "./RightContentBar.css";

const RightContentBar = ({}) => {
  return (
    <>
      <div className="content__right" id="rightbar">
        <Tabs>
          <TabList>
            <Tab style={isMobile ? { fontSize: "2em" } : {} }>Overview</Tab>
            <Tab style={isMobile ? { fontSize: "2em" } : {} }>About</Tab>
            <Tab style={isMobile ? { fontSize: "2em" } : {} }>Projects</Tab>
          </TabList>

          <TabPanel>
            <Overview />
          </TabPanel>

          <TabPanel>
            <About />
          </TabPanel>

          <TabPanel>
            <Experience />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default RightContentBar;
