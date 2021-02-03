import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import '../../form.css';
//seth imports
import {getLogin} from '../../redux/actions/loginActions';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

// requirements
const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, "Username needs to be at least 3 characters"),
  password: yup.string().required('Password is required').min(5, "Password must be at least 5 characters"),
});


  const LoginForm = ({getLogin}) => {
  // state
  // placeholder login details
  //u: eve.holt@reqres.in
  //p:
  const [form, setForm] = useState({username: 'lambda345', password: 'lambda123'});
  const [errors, setErrors] = useState({username: '', password: ''});
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
    getLogin(form);
    history.push("/market")
    // axios.post("/", form);
  };

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form]);

  



  return (
    <section className="form-section">
      <form onSubmit={submit}>

        <h4>Login</h4>
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
        <input type="submit" value="Submit" />
      </form>
    </section>
  )
}



// Redux
const mapStateToProps = (state) =>{
  return{state}
}
const mapDispatchToProps = {getLogin}



export default  connect(mapStateToProps, mapDispatchToProps) (LoginForm) ;