
import React, { useEffect, useState, useRef } from "react";
// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {

  Container,
  Row,
  Col,
  Button,
  // UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components

//import ToolShedNavbar from "../components/Navbars/ToolShedNavbar.js";
import AddBtnBorrowed from "../components/Buttons/AddBtnBorrowed.js";

// import ViewToolsBtn from "../components/ViewToolsBtn/index.js"
import Footer from "../components/Footer/Footer.js";
import SearchBtnBorrowed from "../components/Buttons/SearchBtnBorrowed.js";
import SearchBtnOutNetwork from "../components/Buttons/SearchBtnOutNetwork.js";
import BorrowedToolsByCategory from "components/BorrowedToolsByCategory";
// import ExampleToolList from "../components/ExampleToolList/ExampleToolList";
import UserNameDisplay from "../components/UserNameDisplay/UserNameDisplay.js";
import UpdateBorrowedCard from "components/ToolCard/UpdateBorrowedCard";
import ScrollToTop from "components/ScrollToTop/index.js";
import CustomNavbar from "../components/Navbars/CustomNavbar.js";
import Spacer from "../components/Spacer/index.js";
import AddBtnBorrowedDirectory from "components/Buttons/AddBtnBorrowedDirectory.js";
import ViewToolsBtn from "components/Buttons/ViewToolsBtn.js";
const carouselItems = [
  {
    src: require("assets/img/borrow-tools.jpg").default,
    altText: "Slide 1",
    caption: "",
  },

];

// let ps = null;

export default function Borrowed() {

  const toolsByCategory = useRef();
  const [displayBorrowedByCategory, setDisplayBorrowedByCategory] = useState(false);
  const [displayUpdateCard, setDisplayUpdateCard] = useState(false);
  const loanedUpdate = useRef();
  
  // const [setToolshedImgOpacity] = useState(0.2);
  //display Borrowed Tools by category
  let handleClick = () => {
    setDisplayBorrowedByCategory(true);
    toolsByCategory.current.scrollIntoView({
      behavior: "smooth", inline: 'center', block: 'center'
    });
  };


  let handleClickAdd = () => {
    setDisplayUpdateCard(true);
    loanedUpdate.current.scrollIntoView({
      behavior: "smooth", inline: 'center', block: 'center'
    });
  };
  let closeUpdateCard = () => {
    setDisplayUpdateCard(false);
  }
  let close = () => {
    setDisplayBorrowedByCategory(false);
  }

  // useEffect(() => {

  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.className += " perfect-scrollbar-on";
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       // ps = new PerfectScrollbar(tables[i]);
  //       PerfectScrollbar(tables[i]);
  //     }
  //   }

  // }, []);

  return (
    <>
      <CustomNavbar />
      <Router>
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
                  <Spacer />
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

                          <ViewToolsBtn handleClick={() => handleClick()} directionArrow='left' />


                          <p className="category text-success d-inline">
                            View Borrowed Tools
                          </p>
                        </div>
                        <div className="btn-wrapper">
                          <div className="button-container">

                            <AddBtnBorrowedDirectory handleClickAdd={() => handleClickAdd()} />
                            <SearchBtnBorrowed />

                            <AddBtnBorrowed />

                          </div>
                        </div>
                        <SearchBtnOutNetwork />
                      </div>


                    </div>
                  </Col>
                </Row>

                <UserNameDisplay />
              </Container>

            </div>

          </div>

          {!displayUpdateCard && <ScrollToTop />}

          <div ref={loanedUpdate} />
          <div >
            {displayUpdateCard && <Button
              className="button"
              color="danger"
              onClick={closeUpdateCard}
              size="lg"
            >Close The Window
            </Button>}
            {displayUpdateCard && <Container>
              <Row>
                <Col lg="6" md="6">
                  <Route exact path="/update" component={UpdateBorrowedCard} />
                </Col>
              </Row>
            </Container>}

          </div>

          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png").default}
            />
            {/* <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Borrowed{" "}
                    <span className="text-info">Be curtious to Ur Neighbor</span>
                  </h1>
                </Col>
              </Row> */}

              {/* <ExampleToolList /> */}

            {/* </Container> */}
            {/* Borrowed Tools list section */}
          </section>
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png").default}
            />
            {!displayBorrowedByCategory && <ScrollToTop />}

            {displayBorrowedByCategory && <Button
              className="button"
              color="danger"
              onClick={close}
              size="lg"
            >Close The Door
            </Button>}

            {displayBorrowedByCategory &&
              <BorrowedToolsByCategory />
            }



          </section>
          <div ref={toolsByCategory} />
          <Footer />
        </div>
      </Router>
    </>
  );
}
