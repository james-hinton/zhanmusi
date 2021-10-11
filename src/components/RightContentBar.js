import Overview from './Overview';
import About from './About'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../assets/styles/RightContentBar.css'

const RightContentBar = ({}) => {

    return (
        <>  
        <div className="content__right">
            <Tabs>
                <TabList>
                    <Tab>Portfolio</Tab>
                    <Tab>About Me</Tab>
                    <Tab>Technical Skills</Tab>
                    <Tab>Experience</Tab>
                </TabList>

                <TabPanel>
                    <Overview 

                    />
                </TabPanel>

                <TabPanel>
                    <About />
                </TabPanel>

                <TabPanel>
                    <About />
                </TabPanel>

                <TabPanel>
                    <About />
                </TabPanel>
            </Tabs>
        </div>

        </>
    )
}

export default RightContentBar