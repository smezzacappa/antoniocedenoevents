import React, {Component} from 'react'
import {Nav, Navbar } from 'react-bootstrap'
import EventsLogo from './ACEvents'

class Footer extends Component {
    render(){
        return(
          <div>
    <Navbar bg="dark" expand="lg">
  {/* Make favicons as icons at bottom */} 
  <Navbar.Brand href="/" className='ml-auto' id='AC'>
      <EventsLogo/>
  </Navbar.Brand>
</Navbar>
        <style jsx>{`
          .ml-auto{
            margin-right: 10%;
          } 
          #AC{
              margin-right:-10% !important;
          }
          .nav-link{
            font-size: 160%;
            // color: #ffffff !important;
            margin-right: 10%;
            padding: 0px;
           
          }
        `}</style>
        </div>
        )
    }
}

export default Footer;