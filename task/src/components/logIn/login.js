import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const getUser = async () => {
    const users = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/log`,
      { email, password }
    );

    localStorage.setItem("role", users.data.result.role);
    localStorage.setItem("token", users.data.token);
    localStorage.setItem("userID", users.data.result._id);
    navigate(`/`);
    window.location.reload(false);
  };

  return (
    <>
      <div className="describeItem">
        <span className="Logg">Log in </span>
        <input
          type="text"
          placeholder=" email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder=" password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="LogBtn"
          onClick={() => {
            getUser();
          }}
        >
          <BsFillArrowRightCircleFill className="goIcon" />
        </button>
        <div className="already">
          Don't have an account? <Link to="/signup">Sign up </Link>
        </div>
        <div className="mesageL">{message} </div>
      </div>
    </>
  );
};

export default Login;
