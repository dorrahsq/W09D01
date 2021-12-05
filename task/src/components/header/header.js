import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { SiGooglephotos } from "react-icons/si";
const Header = () => {
  let navigate = useNavigate();

  const logOut = () => {
    navigate(`/`);
    localStorage.clear();
    window.location.reload(false); //changgge
    console.log("log out");
  };
  let role = localStorage.getItem("role");

  return (
    <>
      <div className="nav">
        <ul>
          <li className="lie" id="homeNav">
            <Link className="link" to="/">
              Tasks
            </Link>
          </li>
          {role == "61a4e135a6502019b9898c1e" && (
            <li id="myPro" className="lie">
              <Link className="link" to="/usres">
                users
              </Link>
            </li>
          )}

          <li id="logOut">
            <p className="link" onClick={logOut}>
              {" "}
              <AiOutlineLogout />
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
