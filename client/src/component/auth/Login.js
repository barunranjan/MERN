import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Login In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form onSubmit={(e) => onSubmit(e)} className="form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={(e) => onChange(e)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            name="password"
            onChange={(e) => onChange(e)}
            value={password}
          />
        </div>

        <input type="submit" value="Log In" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Not A member yet? <Link to="/register">Register Now</Link>
      </p>
    </Fragment>
  );
};

export default Login;
