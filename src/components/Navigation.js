import React, {Component} from 'react'
import {Nav, Navbar } from 'react-bootstrap'
import Logo from './Logo'
import Snow from '../images/snow.png'

var sectionStyle = {
  backgroundImage: `url(${Snow})`
}

class Navigation extends Component {
    render(){
        return(
          <div>
<Navbar expand="lg" style={sectionStyle}>
  <Navbar.Brand href="/">
    
      <Logo/>
    
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Tickets</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
        <style jsx>{`
        nav{
          background
        }
          .ml-auto{
            margin-right: 10%;
          } 
          .nav-link{
            font-size: 160%;
            color: white !important;
            background-color: black;
            margin-right: 10%;
            padding: 0px;
            box-shadow: black 1px 0px 6px 3px;
            border-radius: 10%;
          }
          Logo{
            margin-left:-10%
            
          }
          //  #basic-navbar-nav{
          //   box-shadow: black 4px 3px 3px;
          //  }
        `}</style>
        </div>
        )
    }
}

export default Navigation;