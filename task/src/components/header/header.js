import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const [role, setRole] = useState(localStorage.getItem("role"));
  let navigate = useNavigate();

  const logOut = () => {
    navigate(`/`);
    localStorage.clear();
    window.location.reload(false);
    console.log("log out");
  };

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
            <li className="lie">
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
