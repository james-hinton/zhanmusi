import DropdownItem from './DropdownItem.js'

import '../assets/styles/Dropdown.css'

const Dropdown = ({searchText}) => {

    return (
        <>
            <div className="dropdown">
                <DropdownItem 
                    title={searchText}
                />
                <DropdownItem />
                <DropdownItem />
                <DropdownItem />
                <DropdownItem />
            </div>
        </>
    )
}

export default Dropdown