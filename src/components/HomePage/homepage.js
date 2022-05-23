import React, { Component } from "react";
//import { Layout} from "antd";

import "./homepage.css";
import Login  from "../Login/login";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";



import styled from 'styled-components';
import { Router } from "react-router-dom";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


const Homepage = () => {
    return (
      <>
     <NavigationBar/>
     <Sidebar/>
      </>
    );

}
export default Homepage


