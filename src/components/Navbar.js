import Image from './Image'
import Search from './Search'
import NavLink from './NavLink'
import GitHub from '../assets/github.png'

import '../assets/styles/Navbar.css'

const Navbar = ({setBackground}) => {

    return (
        <>
        <div class="navbar">
            <div class="navbar__item">
                <Image
                    logo
                    image={GitHub}

                />
            </div>

            <div class="navbar__item">
                <Search
                    setBackground={setBackground}
                />
            </div>


            <div class="navbar__item">
                <NavLink
                    text='Pull requests'
                    link='#'
                />
            </div>

            <div class="navbar__item">
                <NavLink
                    text='Issues'
                    link='#'
                />
            </div>

            <div class="navbar__item">
                <NavLink
                    text='Marketplace'
                    link='#'
                />
            </div>

            <div class="navbar__item">
                <NavLink
                    text='Explore'
                    link='#'
                />
            </div>
            





        </div>

        </>
    )
}

export default Navbar