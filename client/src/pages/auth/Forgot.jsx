import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import classes from "./auth.module.scss";

const Forgot = () => {
  const [email, setEmail] = useState("");

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
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>
          <br />
          <form onSubmit={loginUser}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
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

export default Forgot;
