import React, { useState } from "react";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import classes from "./auth.module.scss";

const initialState = {
  password: "",
  confirmPassword: "",
};

const Reset = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;

  const handleInputChange = (e) => {};

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className={`container ${classes.auth}`}>
      <Card>
        <div className={classes.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>
          <form onSubmit={loginUser}>
            <PasswordInput
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={classes.links}>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Reset;
