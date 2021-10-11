import Image from './Image'
import Button from './Button'
import InfoPanel from './InfoPanel'

import '../assets/styles/LeftContentBar.css'

const LeftContentBar = ({}) => {

    return (
        <>  
        <div className="content__left">
            <Image 
                image='https://avatars.githubusercontent.com/u/63542818?v=4' //https://media-exp1.licdn.com/dms/image/C4E03AQHAr70_C9qu6w/profile-displayphoto-shrink_800_800/0/1631627034390?e=1639612800&v=beta&t=iEPV9Yiw05DHksthq9cvj-4Re8AVvRW8wrjWsddLptc
                circle
                margin={true}
            />

            <h1>James Hinton</h1>
            <h3>james-hinton</h3>

            <Button
                text='Contact Me'
            />

            <div className='info'>
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

        </div>

        </>
    )
}

export default LeftContentBar