import React, { useState, useEffect } from 'react';

import * as yup from 'yup';
//seth imports
import {createUser} from '../../redux/actions/loginActions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

// requirements
const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, "Username needs to be at least 3 characters"),
  password: yup.string().required('Password is required').min(5, "Password must be at least 5 characters"),
  name: yup.string().required('Provide a name for your store'),
});



  const RegisterForm = ({createUser}) => {


  // state
  const [form, setForm] = useState({username: 'sethMac', password: 'alone', name: `Seth's Shop`});
  const [errors, setErrors] = useState({username: '', password: '', name: ""});
  const [disabled, setDisabled] = useState(true);

  // functions
  const history = useHistory();
  const setFormErrors = (id, value) => {
    yup.reach(schema, id).validate(value)
      .then(() => setErrors({ ...errors, [id]: '' }))
      .catch(err => setErrors({ ...errors, [id]: err.errors }));
  };
  const change = (event) => {
    const { value, id } = event.target;
    setFormErrors(id, value);
    setForm({ ...form, [id]: value });
  };
  const submit = (event) => {
    event.preventDefault();
    createUser(form);
    history.push("/market")
    // axios.post("/", form);
  };

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form]);

  



  return (
    <section className="form-section">
      <form onSubmit={submit}>

        <h4>Register</h4>
          <>
            <label htmlFor="username">Username</label>
              <span style={{color: 'red'}}>{errors.username}</span>
              <input onChange={change} value={form.username} id="username" type="text" />
          </>
          <>
            <label htmlFor="password">Password</label>
              <span style={{color: 'red'}}>{errors.password}</span>
              <input onChange={change} id="password" value={form.password} type="password" />
          </>
          <>
            <label htmlFor="name">Store Name</label>
              <span style={{color: 'red'}}>{errors.name}</span>
              <input onChange={change} id="name" value={form.name} type="text" />
          </>
        <input type="submit" value="Submit" />
      </form>
    </section>
  )
}



// Redux
const mapStateToProps = (state) =>{
  return{state}
}
const mapDispatchToProps = {createUser}



export default  connect(mapStateToProps, mapDispatchToProps) (RegisterForm) ;