
import React, { useState, useRef } from "react";
// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import {

  Container,
  Row,
  Col,
  Button,
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
  const [handleClickUpdateBorrowed, setHandleClickUpdateBorrowed] = useState(false);
  const [removeButton, setRemoveButton] = useState(false);
  const toolsByCategory = useRef();
  const [displayBorrowedByCategory, setDisplayBorrowedByCategory] = useState(false);
  const [displayUpdateCard, setDisplayUpdateCard] = useState(false);
  const borrowedUpdate = useRef();

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
    borrowedUpdate.current.scrollIntoView({
      behavior: "smooth", inline: 'center', block: 'center'
    });
  };
  let closeUpdateCard = () => {
    setDisplayUpdateCard(false);
  }
  let close = () => {
    setDisplayBorrowedByCategory(false);
  }
  const location = useLocation();

  let handleClickUpdateBorrowedBtn = () => {
    //close button
    setRemoveButton(true);

    let updateUrl = new Promise ((resolve)=>
    resolve(setHandleClickUpdateBorrowed(true)
     ));
     updateUrl.then(()=>{
      setInterval(borrowedUpdate.current.scrollIntoView({
            behavior: 'smooth', inline: 'center', block: 'nearest'
          }),500);
  });
  };
  return (
    <>
      <CustomNavbar />
      <Router forceRefresh={true} >
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


          <div >

            {/* close window conditional */}
            {displayUpdateCard && <Button
              className="button"
              color="danger"
              onClick={closeUpdateCard}
              size="lg"
            >Close The Window
            </Button>}

           

            {/* display update borrowed section/container conditional */}
            {displayUpdateCard && <Container>
              <Row>
                <Col lg="6" md="6">

                  {/* close button conditional */}
                  {!removeButton && <Button onClick={() => handleClickUpdateBorrowedBtn()} >
                    <Link to="/update" className={location.pathname === "/update" ? "nav-link active" : "nav-link"} >
                      <span>Click Here To</span>
                    </Link>
                  </Button>}
                  {/* display borrowed db conditional */}
                  <h1>Designate a tool as being borrowed</h1>
                  {handleClickUpdateBorrowed && <Route exact path="/update" component={UpdateBorrowedCard} />}
                
                </Col>
              </Row>
            </Container>}
            <div ref={borrowedUpdate} />
          </div>

          <section className="section section-lg section-coins" id="testSlashUpdate">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png").default}
            />


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
