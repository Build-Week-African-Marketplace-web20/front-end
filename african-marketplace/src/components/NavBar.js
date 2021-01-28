import React, {useState} from 'react'
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


export const NavBar = () => {
   
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
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
                    <Link className="text-warning" to="/register">Register</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link className="text-warning" to="/login">Login</Link>
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

export default NavBar;