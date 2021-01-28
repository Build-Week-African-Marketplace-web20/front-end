import React from 'react';
import Form from './components/Form';

const Login = () => {
  return (
  <>
    {/* pass the prop something truthy to enable it */}
    <Form username={1} password={1} />
  </>
  )
};
export default Login;