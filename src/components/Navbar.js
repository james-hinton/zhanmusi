import Image from './Image'
import Search from './Search'
import NavLink from './NavLink'
import GitHub from '../assets/github.png'

import '../assets/styles/Navbar.css'

const Navbar = ({setBackground, pokeData, setpokeData}) => {

    return (
        <>
        <div className="navbar">
            <div className="navbar__item">
                <Image
                    logo
                    image={GitHub}

                />
            </div>

            <div className="navbar__item">
                <Search
                    setBackground={setBackground}
                    pokeData={pokeData}
                    setpokeData={setpokeData}
                />
            </div>


            <div className="navbar__item">
                <NavLink
                    text='Pull requests'
                    link='#'
                />
            </div>

            <div className="navbar__item">
                <NavLink
                    text='Issues'
                    link='#'
                />
            </div>

            <div className="navbar__item">
                <NavLink
                    text='Marketplace'
                    link='#'
                />
            </div>

            <div className="navbar__item">
                <NavLink
                    text='Explore'
                    link='#'
                />
            </div>

            <div className="navbar__item right">
                <NavLink
                    text='Contact'
                    link='#'
                    border
                />
            </div>
            





        </div>

        </>
    )
}

export default Navbar