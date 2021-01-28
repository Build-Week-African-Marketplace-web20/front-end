import React from 'react';
import Form from './components/Form';

const Register = () => {
  return (
    <>
      {/* pass the prop something truthy to enable it */}
      <Form username={1} email={1} password={1} />
    </>
  )
};
export default Register;