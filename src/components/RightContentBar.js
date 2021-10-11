import Overview from './Overview';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../assets/styles/RightContentBar.css'

const RightContentBar = ({}) => {

    return (
        <>  
        <div className="content__right">
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Repositories</Tab>
                    <Tab>Projects</Tab>
                    <Tab>Packages</Tab>
                </TabList>

                <TabPanel>
                    <Overview 

                    />
                </TabPanel>

                <TabPanel>
                    <h2>Repositories</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Projects</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Packages</h2>
                </TabPanel>
            </Tabs>
        </div>

        </>
    )
}

export default RightContentBar