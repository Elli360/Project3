
// import api from 'utils/api';
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";

// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";
import LoanedToolsByCategory from "components/LoanedToolsByCategory";
import UserNameDisplay from "../components/UserNameDisplay/UserNameDisplay.js";
// import UpdateTool from 'components/AddToolBtnHome';
//import TestNavbar from "components/TestNavbar";
import UpdateCard from "components/ToolCard/UpdateCard";
import Spacer from "components/Spacer";
import ScrollToTop from "components/ScrollToTop/index.js";
import ViewToolsBtn from "components/Buttons/ViewToolsBtn.js";
import AddBtnLoanedDirectory from "components/Buttons/AddBtnLoanedDirectory.js";
import AddBtnLoaned from "components/Buttons/AddBtnLoaned.js";
import SearchBtnOutNetwork from "components/Buttons/SearchBtnOutNetwork.js";
const carouselItems = [
  {
    src: require("assets/img/hands-grabbing-tools.jpg").default,
    altText: "Slide 1",
    caption: "",
  },

];

// let ps = null;

export default function Loaned() {

  //   const history = useHistory({
  //     // basename: "", // The base URL of the app (see below)
  //     // forceRefresh: false, // Set true to force full page refreshes
  //     // keyLength: 6, // The length of location.key
  //     // // A function to use to confirm navigation with the user (see below)

  //     getUserConfirmation: (message, callback) => callback(window.confirm(message))
  // });

  // const update = async () => history.push('/update');
  const [removeButton, setRemoveButton] = useState(false);
  const [displayUpdateCard, setDisplayUpdateCard] = useState(false);
  const [displayLoanedByCategory, setDisplayLoanedByCategory] = useState(false);
  const toolsByCategory = useRef();
  const loanedUpdate = useRef(null);
  //display Loaned Tools by category
  const handleClick = () => {
    setDisplayLoanedByCategory(true);
    toolsByCategory.current.scrollIntoView({
      behavior: 'smooth', inline: 'center', block: 'nearest'
    });
  };
  let handleClickAdd = () => {
    setDisplayUpdateCard(true);
    //added setTimeout to test workaround for scrollIntoView
    // setTimeout( loanedUpdate.current.scrollIntoView({
    //   behavior: 'smooth', inline: 'center', block: 'nearest'
    // }),500);
    loanedUpdate.current.scrollIntoView({
      behavior: 'smooth', inline: 'center', block: 'nearest'
    });
  };
  let closeUpdateCard = () => {
    setDisplayUpdateCard(false);
  };
  let close = () => {
    setDisplayLoanedByCategory(false);
  };

  //for the search modal(on the search button) that is not connected to db yet
  // const [formModal, setFormModal] = useState(false);
  // const [tabs, setTabs] = useState(1);

  const location = useLocation();

  const handleClickUpdateLoaned = () => {
    //close button
    setRemoveButton(true);
    loanedUpdate.current.scrollIntoView({
      behavior: 'smooth', inline: 'center', block: 'nearest'
    });
  }

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
              {/* Placehoder */}
              {/* <Container><Row><Col>Move Image Down</Col></Row><Row><Col>Move Image Down</Col></Row></Container> */}
              <Container>
                <Row className="justify-content-between">
                  <Col md="6">
                    <Row className="justify-content-between align-items-center">
                      <UncontrolledCarousel items={carouselItems} />
                    </Row>
                  </Col>
                  <Col md="5">
                    {/* <h1 className="profile-title text-left">Tools</h1> */}
                    <h5 className="text-on-back">Loaned</h5>
                    <h1 className="profile-title text-left">Tools</h1>
                    <p className="profile-description text-left">
                      Can't find a tool you thought you had? Check here to see if you loaned it out to someone.
                    </p>
                    <div className="btn-wrapper pt-3">
                      <div className="btn-wrapper">
                        <div className="button-container">

                          <ViewToolsBtn handleClick={() => handleClick()} directionArrow='left' />

                          <p className="category text-success d-inline">
                            View Loaned Tools
                          </p>
                          <div className="btn-wrapper">
                            <div className="button-container">

                              <AddBtnLoanedDirectory handleClickAdd={() => handleClickAdd()} />

                              <AddBtnLoaned />

                            </div>

                            <SearchBtnOutNetwork />

                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <UserNameDisplay />

              </Container>
            </div>
          </div>

          {!displayUpdateCard && <ScrollToTop />}

          {/* <div ref={loanedUpdate} /> */}
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
                  {!removeButton && <Button onClick={() => handleClickUpdateLoaned()} >
                    <Link to="/update" className={location.pathname === "/update" ? "nav-link active" : "nav-link"} >
                      <span>Click Here To</span>
                    </Link>
                  </Button>}
                  <h1>Sign a tool out...</h1>
                  <Route exact path="/update" component={UpdateCard} />
                </Col>
              </Row>
            </Container>}
          </div>

          {/* Loaned Tools list section */}
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png").default}
            />

            {!displayLoanedByCategory && <ScrollToTop />}

            <div ref={loanedUpdate} />
            
            {displayLoanedByCategory && <Button
              className="button"
              color="danger"
              onClick={close}
              size="lg"
            >Close The Door
            </Button>}

            {displayLoanedByCategory &&
              <LoanedToolsByCategory />
            }

          </section>
          <div ref={toolsByCategory} />

          <Footer />

        </div>
      </Router>
    </>
  )
}
