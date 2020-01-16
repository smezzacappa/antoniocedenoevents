import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
import Subzero from '../images/subzero.jpg'

class Layout extends Component {
    render(){
        return(
            <div className="Layout">
                <Image src={Subzero} className="flyer"/>
                <style jsx>{`
                .Layout{
                height: 100%;
               
                }
                .flyer{
                    margin: 10%;
                    width: 40%;
                }
                `}
                </style>
            </div>
        )
    }
}

export default Layout;