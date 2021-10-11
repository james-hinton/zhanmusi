import '../assets/styles/Repo.css'

const Repo = ({project, priv, about, language}) => {

    return (
        <>
            <div className="repo">
                <div className="repo__top">
                    <div className="title">
                        <div className="project">
                            {project}
                        </div>
                        <div className="public">
                            <p className="publicity">{priv}</p>
                        </div>
                    </div>
                    <div className="about">
                        <small>{about}</small>
                    </div>
                </div>

                <div className="repo__bottom">
                    <div className="language">
                        <small>{language}</small>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Repo