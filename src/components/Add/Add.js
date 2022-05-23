import React, { Component, useState } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";

import { Link, useHistory } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";
import "../Add/Add.css";

function Add() {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [DateJoining, setJoiningDate] = useState("");
  const [password, setPasword] = useState("");
  const history = useHistory();

  function submit(event) {
    //console.log(email, password)
    history.push("/dashboard");
  }

  return (
    <>
      <NavigationBar />
      <Sidebar />
      <h4 style={{ marginLeft: "6.5rem" }}>Add New Farmer</h4>
      return (
      <div>
        <div className={"loginFormContainer"}>
          <div className={"loginForm"}>
            <h1 style={{ color: "#1d912b", fontStyle: "italic" }}>
              Add New Farmer
            </h1>

            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"text"}
                placeholder={"Farmer Name"}
                name={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"number"}
                placeholder={"Cell Number"}
                name={"number"}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"number"}
                placeholder={"CNIC"}
                name={"cnic"}
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
              />
            </div>
            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"number"}
                placeholder={"Age of Farmer"}
                name={"age"}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"date"}
                placeholder={"Date of Joining"}
                name={"JoiningDate"}
                value={DateJoining}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>

            <button className={"loginButton"} type="submit" onClick={submit}>
              Save
            </button>
          </div>
          <div className={"loginImage"}></div>
        </div>
      </div>
      );
    </>
  );
}
export default Add;
