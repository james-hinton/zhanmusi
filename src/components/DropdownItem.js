import SvgIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';

const DropdownItem = ({title}) => {
    return (
        <>
            <div className="dropdown__item">
                <div className="dropdown__item-image">
                    <SvgIcon component={SearchIcon}></SvgIcon>
                </div>
                <div className="dropdown__item-text">{title}</div>
            </div>
        </>
    )
}

export default DropdownItem