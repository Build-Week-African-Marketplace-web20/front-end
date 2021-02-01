import React from 'react';
import Form from './components/Form';
import {connect} from 'react-redux'
import {getLogin} from './redux/actions/loginActions'

const Login = ({getLogin}) => {


  return (
  <>
    {/* pass the prop something truthy to enable it */}
    {/* <Form username={1} password={1} getLogin={getLogin}/> */}
  </>
  )
};
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = {getLogin}
export default connect(mapStateToProps, mapDispatchToProps)(Login);