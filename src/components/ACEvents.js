import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
import ACEvents from '../images/acevents.jpeg'


class EventsLogo extends Component {
    render(){
        return(
            <div>
                <Image src={ACEvents} className='ACEvents' /> 

                <style jsx>{`
                div{
                    margin-left: 0% !important;
                }
                    .ACEvents {
                            padding: 0% !important;
                            width: 20% !important;
                            // height: 70%;
                            // box-shadow: 2px 2px 2px #ffffff
                            }
                            `}
</style>
            </div>
           
        )
    }
}
 
export default EventsLogo;