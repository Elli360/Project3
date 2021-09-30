
import React, { useEffect, useState, useRef } from "react";
// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {

  Container,
  Row,
  Col,
  Button,
  UncontrolledTooltip,
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
import UpdateBorrowedCard from "components/ToolCard/UpdateBorrowedCard";
import ScrollToTop from "components/ScrollToTop/index.js";
import CustomNavbar from "../components/Navbars/CustomNavbar.js";
import Spacer from "../components/Spacer/index.js";
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
  const [setToolshedImgOpacity] = useState(0.2);
 //display Borrowed Tools by category
 let handleClick = () => {
  setDisplayBorrowedByCategory(true);
  toolsByCategory.current.scrollIntoView({
    behavior: "smooth",
  });
};
  let handleClickAdd = () => {
    setDisplayUpdateCard(true);
    loanedUpdate.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  let closeUpdateCard = () => {
    setDisplayUpdateCard(false);
  }
  let handleHover = () => {
    setToolshedImgOpacity(1);
  }
  let handleHover2 = () => {
    setToolshedImgOpacity(0.2);
  }
  useEffect(() => {

    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        // ps = new PerfectScrollbar(tables[i]);
        PerfectScrollbar(tables[i]);
      }
    }

  }, []);

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
                        <Button
                            className="btn-link"
                            color="success"
                            onClick={handleClick}
                            // onHover={handleHover}
                            onMouseOver={() => handleHover}
                            onMouseOut={() => handleHover2}

                            size="sm"
                          >
                            <i className="tim-icons icon-minimal-left" />

                          </Button>
                          <p className="category text-success d-inline">
                            View Loaned Tools
                          </p>

                        <Button
                          className="btn-icon btn-simple btn-round btn-neutral"
                          color="danger" id="tooltip24"
                          tag={Link} to="/update"
                          onClick={handleClickAdd}>
                          <i className="tim-icons icon-simple-add" />
                        </Button>
                        <UncontrolledTooltip delay={0} placement="left" target="tooltip24">
                          Add Borrowed Tool from Tool Directory
                        </UncontrolledTooltip>

                          <SearchBtnBorrowed />
                      
                          <AddBtnBorrowed />

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
