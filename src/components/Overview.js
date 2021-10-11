import Repo from './Repo.js'
import Contributions from './Contributions.js'

import '../assets/styles/Overview.css'

const Overview = () => {

    return (
        <>
            <div className="repo__box">
                <h4>Popular repositories </h4>
                
                <div className="repo__box--subtitle">
                    <i>View projects tab for more...</i>
                </div>

                <div className="repo__box--row">
                    <Repo 
                        project='Whoovr'
                        priv='Private'
                        about='Company searcher'
                        language='Python'
                    />
                    <Repo 
                        project='Requiem'
                        priv='Private'
                        about='Cemetery Management System'
                        language='Python'
                    />
                </div>

                <div className="repo__box--row">
                    <Repo 
                        project='LinkedIn Clone'
                        priv='Public'
                        about='Static clone of LinkedIn'
                        language='ReactJS'
                    />
                    <Repo 
                        project='Twitter Clone'
                        priv='Public'
                        about='Static clone of Twitter'
                        language='ReactJS'
                    />
                </div>

            </div>

            <div className="repo__box">
                <h4>Contributions</h4>
                
                <Contributions />

            </div>
        </>
    )
}

export default Overview