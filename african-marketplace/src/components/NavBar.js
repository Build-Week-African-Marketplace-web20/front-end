//[ ] figure out logout path
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
import { getLogout } from '../redux/actions/loginActions';


export const NavBar = ({isLoading, getLogout}) => {
   
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
                    <Link className="text-warning link" to="/market">Market</Link>
                </NavLink>

            </NavItem>
            <NavItem>
                <NavLink>
                  {(token ? 
                    <Link className="text-warning link" to="/inventory">Inventory</Link>
                    : 
                    <Link className="text-warning link" to="/register">Register</Link>
                  )}
                    
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                {(token ? 
                    <Link 
                      className="text-warning" 
                      to="/login" 
                      onClick={()=>
                        getLogout()}>Logout</Link>
                    : 
                    <Link className="text-warning link" to="/login">Login</Link>
                  )}
                </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>{(isLoading ? <p>Please Wait</p> : "")}</NavbarText>
          <NavbarText>Connecting you with your favorite shops since 2021</NavbarText>
        </Collapse>
      </Navbar>

      <Route path='/market' />
    </>
    )
}

const mapStateToProps=(state)=>{
  return{
    isLoading: state.isLoading,
    data: state.data
  }
} 

const mapDispatchToProps = {getLogout}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);