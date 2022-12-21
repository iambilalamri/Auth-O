import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TiUserAddOutline } from "react-icons/ti";
import { BsCheck2All } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import classes from "./auth.module.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className={`container ${classes.auth}`}>
      <Card>
        <div className={classes.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <Card cardClass={classes.group}>
              <ul className="form-list">
                <li>
                  <span className={classes.indicator}>
                    {uCase ? checkIcon : timesIcon}
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
              </ul>
            </Card>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>
          <span className={classes.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Already have an account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
