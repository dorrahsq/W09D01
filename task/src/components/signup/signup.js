import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Signup = () => {
  let navigate = useNavigate();
  const [users, setusers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const getUser = async () => {
    const users = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/create`,
      { email, password, role: "61a4e07ba6502019b9898c1c"}
    );
    setusers(users.data);
    console.log(users.data.result.role);
    localStorage.setItem("role", users.data.result.role);
    localStorage.setItem("token", users.data.token);
    navigate(`/`);
    window.location.reload(false);
  };

  return (
    <>
      {/* <img
        className="videoBG"
        src="https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      /> */}
      <div className="describeItem">
        <span className="Logg">sign up  </span>
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
          already have an account? <Link to="/">log in </Link>
        </div>
        <div className="mesageL">{message} </div>
      </div>
    </>
  );
};

export default Signup;
