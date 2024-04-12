import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="landing-wrapper">
     <div id="heading" style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", color : "#eff0f4" }}> </div>
      <h3 style={{ color: "#d3d6db", fontSize: "15px" }}>This app is for simulation of Inventory Supply Chain.</h3>
      <h3 style={{color: "#233b6e"}}> WORKING</h3>
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ fontSize:"10px" ,marginTop: "2%" }}>
          <li>
            Get data from sensors like location/time through gsm gps chip and pass it
            through <a href="https://nodered.org/">NODE-RED</a>
          </li>
          <li style={{ marginTop: "2%" }}>
            Then we pass that data as parameter in API(fastAPI) that calls smart
            contract using web(three).py and sends data to etehreum blockchain
          </li>
          <li style={{ marginTop: "2%" }}>
            Now users can see their data in real time using this frontend app
            like Current location and time,Product info like id,weight
            etc ,worker id ,Location ,Delivery status
          </li> 
        </ul>
      </div>
      <p style={{ fontSize:"10px"}}>Please Connect to Ropsten test Network</p>
      <p style={{ fontSize:"15px" ,paddingTop: "3%" }}>
        Made By:{" "}
        <a
          style={{ color: "#00BFFF" }}
          href="https://github.com/Bhavya-Tamminana/inventory-and-supplychain-project.git"
          target="_blank"
        >
          Bhavya Tamminana & Mizbah Riyaz{" "}
        </a>
      </p>
    </div>
  );
};

export default Home;
