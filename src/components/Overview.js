import Repo from './Repo.js'
import Contributions from './Contributions.js'

import Projects from '../constants/Projects'

import '../assets/styles/Overview.css'

const Overview = () => {

    return (
        <>
            <div className="repo__box">
                
                {Projects.map((project) => {
                    return (
                        <Repo 
                            project={project.title}
                            priv={project.public ? 'Public' : 'Private'}
                            about={project.description}
                            language={project.language}
                            image={project.image}
                        />
                    )
                })
                }

                <div className="repo__box--subtitle">
                    <i>View projects tab for more...</i>
                </div>

            </div>

            <div className="repo__box contributions">
                <h4>Contributions</h4>
                
                <Contributions />

            </div>
        </>
    )
}

export default Overview