import Overview from "../Overview/Overview";
import Experience from "../Experience/Experience";
import About from "../About/About";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./RightContentBar.css";

const RightContentBar = ({}) => {
  return (
    <>
      <div className="content__right" id="rightbar">
        <Tabs>
          <TabList>
            <Tab>Portfolio</Tab>
            <Tab>About Me</Tab>
            <Tab>Skills & Experience</Tab>
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
