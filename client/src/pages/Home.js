/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";


// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ToolShedNavbar from "components/Navbars/ToolShedNavbar.js";
import DisplayAllHome from "components/DisplayAllHome/DisplayAllHome.js";
import AddBtnHome from "components/AddBtnHome/AddBtnHome.js";
import SearchBtnHome from "components/SearchBtnHome/SearchBtnHome.js";
import UserNameDisplay from "components/UserNameDisplay/UserNameDisplay.js";
import Footer from "components/Footer/Footer.js";

import ToolCard from "components/ToolCard/Toolcard.js"

import bigChartData from "variables/charts.js";

// ====================== post import
import API from 'utils/toolshed-api';
import React, { useEffect, useState } from "react";
import ExampleToolList from "components/ExampleToolList/ExampleToolList";

//==========================

export default function Home() {

  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  //==============================================
  const [tools, setTools] = useState([]);


  function loadTools() {
    API.getCategories().then(res => setTools(res.data)).catch(err => console.log(err))
  };

  useEffect(() => {
    loadTools()
  }, [])


  return (
    <>


      <ToolShedNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Welcome to the ToolShed! <br />
                  <span className="text-white"></span>
                </h1>
                <p className="text-white mb-3">
                  Where you can add, edit and LOAN tools from your inventory.
                  Where you can search for NEW tools and borrow from other users' inventories!...
                </p>
                <DisplayAllHome />
                <div className="btn-wrapper">
                  <div className="button-container">


                    <AddBtnHome />

                    <SearchBtnHome />

                  </div>



                </div>
              </Col>
              <Col lg="4" md="5">
                <img id="toolshed"
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/toolshedpicd.jpg").default}

                />
              </Col>
            </Row>

          </div>
        </div>
        <UserNameDisplay />
      </div>

      <div>
        {/*Dynamic rendering of tools db */}
        <div>

          <ToolCard categories={tools} />

        </div>


        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container>
            {/* ToolChest list section */}
            <ExampleToolList />
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
