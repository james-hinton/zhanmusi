import classNames from 'classnames'
import '../assets/styles/NavLink.css'

const Navlink = ({text, link, dark, border}) => {

    return (
        <>  
            <div className={classNames({
                navlink: 'navlink',
                dark: 'dark',
                border
            })} >
                <a href={link}>
                    <p className={dark && 'dark'}>{text}</p>
                </a>
            </div>
        </>
    )
}

export default Navlink