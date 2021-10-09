
// import api from 'utils/api';
import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {

  // Card,
  // CardHeader,
  // CardBody,
  // CardFooter,
  // CardTitle,
  // ListGroupItem,
  // ListGroup,
  Container,
  Row,
  Col,
  Button,
  // Label,
  FormGroup,
  Form,
  Input,
  // FormText,
  // NavItem,
  // NavLink,
  // Nav,
  // Navbar,
  // Table,
  // TabContent,
  // TabPane,
  UncontrolledTooltip,
  UncontrolledCarousel,
  Modal,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
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
import ViewToolsBtn from "components/ViewToolsBtn/index.js";
const carouselItems = [
  {
    src: require("assets/img/hands-grabbing-tools.jpg").default,
    altText: "Slide 1",
    caption: "",
  },

];

// let ps = null;

export default function Loaned() {
  const [displayUpdateCard, setDisplayUpdateCard] = useState(false);
  const [displayLoanedByCategory, setDisplayLoanedByCategory] = useState(false);
  // const [toolshedImgOpacity, setToolshedImgOpacity] = useState(0.2);
  // const [setToolshedImgOpacity] = useState(0.2);
  const toolsByCategory = useRef();
  const loanedUpdate = useRef();
  //display Loaned Tools by category
  let handleClick = () => {
    setDisplayLoanedByCategory(true);
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
  };
  let close = () => {
    setDisplayLoanedByCategory(false);
  };
  // let handleHover = () => {
  //   setToolshedImgOpacity(1);
  // }
  // let handleHover2 = () => {
  //   setToolshedImgOpacity(0.2);
// }
//for the search modal(on the search button) that is not connected to db yet
const [formModal, setFormModal] = useState(false);
// const [tabs, setTabs] = useState(1);

// useEffect(() => {
//   if (navigator.platform.indexOf("Win") > -1) {
//     document.documentElement.className += " perfect-scrollbar-on";
//     document.documentElement.classList.remove("perfect-scrollbar-off");
//     let tables = document.querySelectorAll(".table-responsive");
//     for (let i = 0; i < tables.length; i++) {
//       PerfectScrollbar(tables[i]);
//       // ps = new PerfectScrollbar(tables[i]);
//     }
//   }
// }, []);

// const { authState, oktaAuth } = useOktaAuth();
// const [userInfo, setUserInfo] = useState(null);

// useEffect(() => {
//   if (!authState.isAuthenticated) {
//     // When user isn't authenticated, forget any user info
//     setUserInfo(null);
//   } else {
//     oktaAuth.getUser().then((info) => {
//       setUserInfo(info);
//     });
//   }
// }, [authState, oktaAuth]); // Update if authState changes

// if (!userInfo) {
//   return (
//     <div>
//       <p>Fetching user profile...</p>
//     </div>
//   );
// }

// const [tools, setTools] = useState([]);


// function loadTools() {
//  api.getCategories().then(res => setTools(res.data)).catch(err => console.log(err))
// };

// useEffect(() => {
//   loadTools()
// }, [])
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
                        {/* <Button
                            className="btn-link"
                            color="success"
                            onClick={handleClick}
                            // onHover={handleHover}
                            onMouseOver={() => handleHover}
                            onMouseOut={() => handleHover2}

                            size="sm"
                          >
                            <i className="tim-icons icon-minimal-left" />

                          </Button> */}
                        <ViewToolsBtn handleClick={() => handleClick()} />
                        <p className="category text-success d-inline">
                          View Loaned Tools
                        </p>
                        <div className="btn-wrapper">
                          <div className="button-container">
                            {/* <Button
                          className="btn-icon btn-simple btn-round btn-neutral"
                          color="success" id="tooltip20" onClick={() => setFormModal(true)}>
                          <i className="tim-icons icon-simple-add" />
                         
                        </Button> */}

                            <Button
                              className="btn-icon btn-simple btn-round btn-neutral"
                              color="success" id="tooltip20"
                              tag={Link} to="/update"
                              onClick={handleClickAdd}>
                              <i className="tim-icons icon-simple-add" />
                            </Button>

                            <UncontrolledTooltip delay={0} placement="left" target="tooltip20">
                              Add Loaned Tool from Tool Directory
                            </UncontrolledTooltip>


                            <Button
                              className="btn-icon btn-simple btn-round btn-neutral"
                              color="success" id="tooltip21" onClick={() => setFormModal(true)}>
                              <i className="tim-icons icon-zoom-split" />
                            </Button>
                            <UncontrolledTooltip delay={0} placement="right" target="tooltip21">
                              Search Loaned Tools
                            </UncontrolledTooltip>
                            {/* Start Search Form Modal */}
                            <Modal
                              modalClassName="modal-black"
                              isOpen={formModal}
                              toggle={() => setFormModal(false)}
                            >
                              <div className="modal-header justify-content-center">
                                <button className="close" onClick={() => setFormModal(false)}>
                                  <i className="tim-icons icon-simple-remove text-white" />
                                </button>
                                <div className="text-muted text-center ml-auto mr-auto">
                                  <h3 className="mb-0">Search Your Loaned Tools</h3>
                                </div>
                              </div>
                              <div className="modal-body">
                                <div className="btn-wrapper text-center">

                                </div>
                                <div className="text-center text-muted mb-4 mt-3">
                                  <small>Describe what you are looking for in this directory</small>
                                </div>
                                <Form role="searchForm">
                                  <FormGroup className="mb-3">
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          Name:
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder="Tool Name"
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          Category:
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder="Tool Category"
                                        type="text"
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          Description:
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder="Tool Description"
                                        type="text"
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          Price:
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder="Tool Price"
                                        type="text"
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          Loaned To:
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder="User Name"
                                        type="text"
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          Promise Date:
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder="Expected Return Date"
                                        type="text"
                                      />
                                    </InputGroup>
                                  </FormGroup>


                                  <div className="text-center">
                                    <Button className="my-4" color="primary" type="button">
                                      Search TOOL
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </Modal>
                            {/* End Search Form Modal */}
                          </div>
                          <Button
                            className="btn-simple"
                            color="info"
                            href="#pablo"
                            id="tooltip22"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="tim-icons icon-bulb-63" /> Search It!
                          </Button>
                          <UncontrolledTooltip delay={0} placement="bottom" target="tooltip22">
                            Search Outside of Directory
                          </UncontrolledTooltip>
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
