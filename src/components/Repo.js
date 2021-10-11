import '../assets/styles/Repo.css'

const Repo = () => {

    return (
        <>
            <div className="repo">
                <div className="repo__top">
                    <div className="title">
                        <div className="project">
                            Deep Learning
                        </div>
                        <div className="public">
                            <p className="publicity">Public</p>
                        </div>
                    </div>
                    <div className="about">
                        <small>Forked from James</small>
                    </div>
                </div>

                <div className="repo__bottom">
                    <div className="language">
                        <small>Python</small>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Repo