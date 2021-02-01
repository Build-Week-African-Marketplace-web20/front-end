import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';


export const NavBar = ({ownerToken}) => {
   
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
   const token = localStorage.getItem("token")

    return(
    <>
    <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">African Marketplace [TT_WEBPT_96]</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
                <NavLink >
                    <Link className="text-warning" to="/market">Market</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                  {(token ? 
                    <Link className="text-warning" to="/register">Inventory</Link>
                    : 
                    <Link className="text-warning" to="/register">Register</Link>
                  )}
                    
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                {(token ? 
                    <Link className="text-warning" to="/login">Login</Link>
                    : 
                    <Link className="text-warning" to="/login">Logout</Link>
                  )}
                    
                </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Connecting you with your favorite shops since 2021</NavbarText>
        </Collapse>
      </Navbar>

      <Route path='/market' />
    </>
    )
}

const mapStateToProps=(state)=>{
  return{
    ownerToken: state.data.ownerToken
  }
}

export default connect(mapStateToProps)(NavBar);