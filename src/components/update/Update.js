import React, { Component, useState } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";

import { Link, useHistory } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";


function Update() {

  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const history = useHistory();



  return (
      <>
      <NavigationBar/>
     <Sidebar/>
     
     <h4 style={{marginLeft:'6.5rem'}}>Update Farmers Details</h4>
  
      
      </>
    
  );
}
export default Update;