import '../assets/styles/Image.css'
import classNames from "classnames";



const Image = ({image, circle, logo}) => {

    return (
        <>  
            <img src={image} className={classNames({
                circle:circle,
                logo:logo,
            })} />
        </>
    )
}

export default Image