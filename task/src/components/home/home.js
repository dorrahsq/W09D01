import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    setToken(tokenn);
    const tasks = await axios.get(`${process.env.REACT_APP_BASE_URL}/task/`, {
      headers: {
        Authorization: `Bearer ${tokenn}`,
      },
    });
    setAllTasks(tasks.data);
    console.log(tasks);
  };

  const deleteTask = async (taskId) => {
    console.log(taskId);
    //delete
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
      { name: newTask },
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
