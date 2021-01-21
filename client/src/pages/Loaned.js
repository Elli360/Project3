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
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {

 
  Container,
  Row,
  Col,
  Button,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ToolShedNavbar from "components/Navbars/ToolShedNavbar.js";
import AddBtnLoaned from "components/AddBtnLoaned/AddBtnLoaned.js";
import SearchBtnLoaned from "components/SearchBtnLoaned/SearchBtnLoaned.js";
import SearchOutNetwork from "components/SearchOutNetwork/SearchOutNetwork.js";
import UserNameDisplay from "components/UserNameDisplay/UserNameDisplay.js";
import ExampleToolList from "components/ExampleToolList/ExampleToolList.js";
import Footer from "components/Footer/Footer.js";
import ToolCard from "components/ToolCard/Toolcard.js";
// ====================== post import
import API from 'utils/toolshed-api';
import { useEffect, useState } from "react";

//==========================

const carouselItems = [
  {
    src: require("assets/img/hands-grabbing-tools.jpg").default,
    altText: "Slide 1",
    caption: "",
  },

];

let ps = null;

export default function Loaned() {

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }

  }, []);

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
            className="dots"
            src={require("assets/img/dots.png").default}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <div className="section">
            <Container>
              <Row>
                <Button
                  href="/#slidingDrawer"

                >MENU</Button>
              </Row>
            </Container>

            <Container>

              <Row className="justify-content-between">

                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>

                <Col md="5">
                  <h5 className="text-on-back">Loaned</h5>
                  <h1 className="profile-title text-left">Tools</h1>
                  <p className="profile-description text-left">
                    Can't find a tool you thought you had? Check here to see if you loaned it out to someone.
                  </p>

                  <div className="btn-wrapper pt-3">

                    <div className="button-container">

                      <AddBtnLoaned />


                      <SearchBtnLoaned />
                    </div>

                    <div className="button-container">
                      <SearchOutNetwork />
                    </div>


                  </div>

                </Col>

              </Row>

             <UserNameDisplay/>

            </Container>

          </div>

        </div>


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
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Loaned Out{" "}
                  <span className="text-info">Please return as received</span>
                </h1>
              </Col>
            </Row>
            {/* Loaned Tools list section */}
            <ExampleToolList />

          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
