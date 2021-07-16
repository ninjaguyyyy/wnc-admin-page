import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../css/login.css";
import AvatarImage from "../../images/login/avatar.svg";
import BgImage from "../../images/login/bg.svg";
import WaveImage from "../../images/login/wave.png";
import { authService } from "../../services/auth.service";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { ROLE_USER, TYPE_ALERT } from "../../common/constants";

export default function Login(props) {
  const history = useHistory();
  const [isFocusUsername, setIsFocusUsername] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    type: null,
    message: "",
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    (async () => {
      const result = await authService.login({
        userName: data.username,
        passWord: data.password,
        role: ROLE_USER.ADMIN,
      });
      if (result.msg) {
        return setOpenAlert({
          open: true,
          message: result.msg,
          type: TYPE_ALERT.ERROR,
        });
      }
      if (result.accessToken) {
        localStorage.setItem("token", result.accessToken);
        history.push("/");
      }
    })();
  };

  return (
    <div>
      <img className="wave" alt="image_file" src={WaveImage} />
      <div className="container">
        <div className="img">
          <img alt="image_file" src={BgImage} />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img alt="image_file" src={AvatarImage} />
            <h2 className="title">Welcome</h2>
            <div className={`input-div one ${isFocusUsername && "focus"}`}>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  {...register("username", { required: true })}
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
                  {...register("password", { required: true })}
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
      <Snackbar
        open={openAlert.open}
        autoHideDuration={6000}
        onClose={() => setOpenAlert({ ...openAlert, open: false })}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          variant="filled"
          onClose={() => setOpenAlert({ ...openAlert, open: false })}
          severity={openAlert.type}
        >
          {openAlert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
