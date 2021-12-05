import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/logIn/login";
import Header from "./components/header/header";
import SignUp from "./components/signup/signup";
import Home from "./components/home/home";
import Users from "./components/users/users";

function App() {
  let userId = localStorage.getItem("token");

  return (
    <>
      <h1> hello </h1>
      {userId ? (
        <>
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/usres" element={<Users />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
