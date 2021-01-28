import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import '../form.css';

const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, "Username needs to be at least 3 characters"),
  password: yup.string().required('Password is required').min(5, "Password must be at least 5 characters"),
});


const Form = () => {

  // state
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })
  const [disabled, setDisabled] = useState(true);

  // functions
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
    // axios.post("/", form);
  };

  // styles
  const formStyle = {
    minWidth: '300px',
    maxWidth: '500px',
    width: '50%'
  };
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form]);

  return (
    <section className="wrapper style5" style={sectionStyle}>
      <form onSubmit={submit} style={formStyle}>
        <label htmlFor="username">Username</label>
        <br />
        <span style={{color: 'red'}}>{errors.username}</span>
        <input onChange={change} value={form.username} id="username" type="text" />

        <br />

        <label htmlFor="password">Password</label>
        <br />
        <span style={{color: 'red'}}>{errors.password}</span>
        <input onChange={change} id="password" value={form.password} type="password" />

        <br />

        <input type="submit" value="Submit" disabled={disabled} />
      </form>
    </section>
  )
}
export default Form;