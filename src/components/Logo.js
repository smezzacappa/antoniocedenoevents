import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
import Calibr from '../images/Calibr.png'


class Logo extends Component {
    render(){
        return(
            <div>
                <Image src={Calibr} className="Calibr"/> 

                <style jsx>{`
                div{
                    margin-left: 0% !important;
                }
                    .Calibr {
                            padding: 1%;
                            width: 50%;
                            color-overlay: black;
                            box-shadow: black 1px 0px 6px 3px;
                            background-color: black;
                            // text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
                            // height: 70%;
                            // box-shadow: 2px 2px 2px #ffffff
                            }
                            `}
</style>
            </div>
           
        )
    }
}
 
export default Logo;