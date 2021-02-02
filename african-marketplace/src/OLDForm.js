import React, { useState, useEffect } from 'react';

import * as yup from 'yup';
//seth imports


// import '../template.css';

// requirements
const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, "Username needs to be at least 3 characters"),
  email: yup.string().required('An email is required'),
  password: yup.string().required('Password is required').min(5, "Password must be at least 5 characters"),
});


const Form = (props) => {
  // these props are only used for enabling their display on the page. See the jsx
  const { username, email, password, getLogin } = props;

  // state
  const [form, setForm] = useState({username: '', email: '', password: ''});
  const [errors, setErrors] = useState({username: '', email: '', password: ''});
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

        {username &&
          <>
            <label htmlFor="username">Username</label>
            <br />
            <span style={{color: 'red'}}>{errors.username}</span>
            <input onChange={change} value={form.username} id="username" type="text" />
          </>
        }

        {email &&
          <>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <span style={{color: 'red'}}>{errors.email}</span>
            <input onChange={change} value={form.email} id="email" type="email" />
          </>
        }

        {password &&
          <>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <span style={{color: 'red'}}>{errors.password}</span>
            <input onChange={change} id="password" value={form.password} type="password" />
          </>
        }

        <br />

        <input type="submit" value="Submit" disabled={disabled} />
      </form>
    </section>
  )
}



//Redux
// const mapStateToProps = (state) =>{return{state}}
// const mapDispatchToProps = {getLogin}



export default  Form ;