import Image from './Image'
import Button from './Button'
import InfoPanel from './InfoPanel'

import '../assets/styles/LeftContentBar.css'

const LeftContentBar = ({}) => {

    return (
        <>  
        <div className="content__left">
            <Image 
                image='https://avatars.githubusercontent.com/u/63542818?v=4'
                circle
                height={'30%'}
                margin={true}
            />

            <h1>James Hinton</h1>
            <h3>james-hinton</h3>

            <Button
                text='Contact Me'
            />

            <InfoPanel title={'Current Position'} value={'Software Developer, Spatial Days Ltd'}/>

            <InfoPanel
                title='Nationality'
                value='British'
            />

            <InfoPanel
                title='Qualifications'
                value='M.Sc. Computing (Distinction)
            B.A. Business (Team Entrepreneurship)'
            />

            <InfoPanel
                title='Development Software/Tools:'
                value='Python, HTML5, CSS3, Javascript, JQuery, Bootstrap,  React, TypeScript, WordPress, Tensorflow, Redis, RabbitMQ, Celery, SQLAlchemy, Dojo, Jinja2, Linux, Docker'
            />            
            
            <InfoPanel
                title='Database Software:'
                value='            
                PostgreSQL/PostGIS, MySQL'
            />    
            
            <InfoPanel
                title='GIS Software'
                value='ESRI ArcGIS Enterprise Portal, QGIS, GeoServer'
            />

            <InfoPanel
                title='Other Software'
                value='BalsamiQ, Draw.io'
            />

        </div>

        </>
    )
}

export default LeftContentBar