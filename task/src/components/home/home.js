import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { RiPencilFill } from "react-icons/ri";

const Home = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [token, setToken] = useState("");
  const [newTask, setNewTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");

  useEffect(() => {
    getAllTask();
  }, []);

  const getAllTask = async () => {
    let tokenn = localStorage.getItem("token");
    let userID = localStorage.getItem("userID");

    setToken(tokenn);
    const tasks = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/task/`,
      { reqUserId: userID },
      {
        headers: {
          Authorization: `Bearer ${tokenn}`,
        },
      }
    );
    setAllTasks(tasks.data);
  };

  const deleteTask = async (taskId) => {
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/task/delete`,
      { _id: taskId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getAllTask();
  };

  const addTask = async () => {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/task/create`,
      { user: localStorage.getItem("userID"), name: newTask },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getAllTask();
  };

  const changeTask = async (taskId) => {
    console.log("change task");
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/task/update`,
      { _id: taskId, newName: updatedTask },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getAllTask();
  };

  return (
    <div className="home">
      <input 
        type="text"
        placeholder="new task"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button onClick={addTask}> add </button>

      {!allTasks.length ? (
        <h2> you dont have any tasks</h2>
      ) : (
        <div className="anim">
          {allTasks.map((ele) => {
            return (
              <div>
                <h3> {ele.name} </h3>
                <button
                  onClick={() => {
                    deleteTask(ele._id);
                  }}
                >
                  delete task
                </button>
                <input
                  onChange={(e) => {
                    setUpdatedTask(e.target.value);
                  }}
                />
                <RiPencilFill
                  className="editBioIcno"
                  onClick={() => {
                    changeTask(ele._id);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
