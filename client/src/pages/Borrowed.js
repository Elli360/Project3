
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
  UncontrolledCarousel,
} from "reactstrap";

// core components

//import ToolShedNavbar from "../components/Navbars/ToolShedNavbar.js";
import AddBtnBorrowed from "../components/AddBtnBorrowed/AddBtnBorrowed.js";
import Footer from "../components/Footer/Footer.js";
import SearchBtnBorrowed from "../components/SearchBtnBorrowed/SearchBtnBorrowed.js";
import SearchOutNetwork from "../components/SearchOutNetwork/SearchOutNetwork.js";
// import ExampleToolList from "../components/ExampleToolList/ExampleToolList";
import UserNameDisplay from "../components/UserNameDisplay/UserNameDisplay.js";
import CustomNavbar from "../components/Navbars/CustomNavbar.js";
import Spacer from "../components/Spacer/index.js";
const carouselItems = [
  {
    src: require("assets/img/borrow-tools.jpg").default,
    altText: "Slide 1",
    caption: "",
  },

];

let ps = null;

export default function Borrowed() {
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
  return (
    <>
      <CustomNavbar />
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
                {/* <Button
                  href="/#slidingDrawer"

                >MENU</Button> */}
                <Spacer/>
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
                  {/* <h1 className="profile-title text-left">Tools</h1> */}
                  <h5 className="text-on-back">Borrowed</h5>
                  <h1 className="profile-title text-left">Tools</h1>
                  <p className="profile-description text-left">
                    Someone asking about a tool? Check here to see if you borrowed it.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <div className="btn-wrapper">
                      <div className="button-container">

                        <AddBtnBorrowed />

                        <SearchBtnBorrowed />

                      </div>
                      <SearchOutNetwork />
                    </div>


                  </div>
                </Col>
              </Row>

              <UserNameDisplay />
            </Container>

          </div>

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
                  Borrowed{" "}
                  <span className="text-info">Be curtious to Ur Neighbor</span>
                </h1>
              </Col>
            </Row>

            {/* <ExampleToolList /> */}

          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
