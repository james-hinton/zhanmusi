import Image from './Image'
import Button from './Button'

import '../assets/styles/LeftContentBar.css'

const LeftContentBar = ({}) => {

    return (
        <>  
        <div className="content__left">
            <Image 
                image='https://avatars.githubusercontent.com/u/63542818?v=4'
                circle
            />

            <h1>James Hinton</h1>
            <h3>james-hinton</h3>

            <Button
                text='Edit profile'
            />

            <p>1 Follower</p>

            <p>Spatial Days</p>

        </div>

        </>
    )
}

export default LeftContentBar