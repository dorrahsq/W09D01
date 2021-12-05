import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let tokenn = localStorage.getItem("token");
    setToken(tokenn);
    const users = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/`, {
      headers: {
        Authorization: `Bearer ${tokenn}`,
      },
    });
    setAllUsers(users.data);
    console.log(users.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/user/?_id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getAllUsers();
  };

  return (
    <>
      {allUsers.length &&
        allUsers.map((ele) => {
          return (
            <>
              <h3>{ele.email}</h3>
              <button onClick={() => deleteUser(ele._id)}> delete </button>
            </>
          );
        })}

      {!allUsers.length && <h2>there is no user or you are forbidden</h2>}
    </>
  );
};

export default Users;
