import classNames from 'classnames'
import '../assets/styles/NavLink.css'

const Navlink = ({text, link, dark}) => {

    return (
        <>  
            <div className={classNames({
                navlink: 'navlink',
                dark: 'dark'
            })} >
                <a href={link}>
                    <p className={dark && 'dark'}>{text}</p>
                </a>
            </div>
        </>
    )
}

export default Navlink