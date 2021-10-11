import Repo from './Repo.js'
import '../assets/styles/Overview.css'

const Overview = () => {

    return (
        <>
            <div className="repo__box">
                <h4>Popular repositories </h4>

                <div className="repo__box--row">
                    <Repo />
                    <Repo />
                </div>

                <div className="repo__box--row">
                    <Repo />
                    <Repo />
                </div>

                <div className="repo__box--row">
                    <Repo />
                    <Repo />
                </div>

            </div>
        </>
    )
}

export default Overview