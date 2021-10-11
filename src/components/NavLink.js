import '../assets/styles/NavLink.css'

const Navlink = ({text, link}) => {

    return (
        <>  
            <div className="navlink">
                <a href={link}>
                    <p>{text}</p>
                </a>
            </div>
        </>
    )
}

export default Navlink