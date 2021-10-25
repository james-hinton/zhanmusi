import Overview from './Overview';
import Experience from './Experience'
import About from  './About'
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
                    <Tab>Skills & Experience</Tab>
                    <Tab>Play Chess With Me</Tab>
                </TabList>

                <TabPanel>
                    <Overview 

                    />
                </TabPanel>

                <TabPanel>
                    <About />
                </TabPanel>

                <TabPanel>
                    <Experience />
                </TabPanel>

                <TabPanel>
                    Chess board here that any user can play with me. 
                    Allow email notifications with PGN.

                    Your turn / My Turn
                </TabPanel>
            </Tabs>
        </div>

        </>
    )
}

export default RightContentBar