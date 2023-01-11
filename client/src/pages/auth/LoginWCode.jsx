import React, { useState } from "react";
import { GrInsecure } from "react-icons/gr";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import classes from "./auth.module.scss";

const LoginWCode = () => {
  const [loginCode, setLoginCode] = useState("");

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
            <GrInsecure size={35} color="#999" />
          </div>
          <h2>Enter Access Code</h2>
          <br />
          <form onSubmit={loginUser}>
            <input
              name="loginCode"
              type="text"
              placeholder="Access Code"
              value={loginCode}
              onChange={(e) => setLoginCode(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Proceed To Login
            </button>
            <span className="--flex-center">
              Check your email for login access code
            </span>
            <div className={classes.links}>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p className="v-link --color-primary">
                <b>Resend Code</b>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginWCode;
