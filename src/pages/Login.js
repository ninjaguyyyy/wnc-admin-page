import React, { useState } from "react";
import "../css/login.css";

import WaveImage from "../images/login/wave.png";
import AvatarImage from "../images/login/avatar.svg";
import BgImage from "../images/login/bg.svg";

export default function Login() {
  const [isFocusUsername, setIsFocusUsername] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  return (
    <div>
      <img className="wave" alt="image_file" src={WaveImage} />
      <div className="container">
        <div className="img">
          <img alt="image_file" src={BgImage} />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img alt="image_file" src={AvatarImage} />
            <h2 className="title">Welcome</h2>
            <div className={`input-div one ${isFocusUsername && "focus"}`}>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  onFocus={() => setIsFocusUsername(true)}
                  onBlur={() => setIsFocusUsername(false)}
                  placeholder="Username"
                />
              </div>
            </div>
            <div className={`input-div pass ${isFocusPassword && "focus"}`}>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  onFocus={() => setIsFocusPassword(true)}
                  onBlur={() => setIsFocusPassword(false)}
                />
              </div>
            </div>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
