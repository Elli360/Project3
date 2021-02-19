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
import api from 'utils/api';
import React, { useEffect, useState } from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
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
  Label,
  FormGroup,
  Form,
  Input,
  // FormText,
  // NavItem,
  // NavLink,
  // Nav,
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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import LoanedToolsByCategory from "components/LoanedToolsByCategory";

const carouselItems = [
  {
    src: require("assets/img/hands-grabbing-tools.jpg").default,
    altText: "Slide 1",
    caption: "",
  },

];

let ps = null;

export default function Loaned() {
   const [displayLoanedByCategory, setDisplayLoanedByCategory] = useState(false);
   const [toolshedImgOpacity, setToolshedImgOpacity] = useState(0.2);
  let handleClick = () => {
    setDisplayLoanedByCategory(true);
    //  }
  };
  let close = () => {
    setDisplayLoanedByCategory(false);
  }
  let handleHover=()=>{
    setToolshedImgOpacity(1);
      }
      let handleHover2=()=>{
        setToolshedImgOpacity(0.2);
          }

  const [formModal, setFormModal] = React.useState(false);
  const [tabs, setTabs] = React.useState(1);
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
   api.getCategories().then(res => setTools(res.data)).catch(err => console.log(err))
  };

  useEffect(() => {
    loadTools()
  }, [])
  return (
    <>
      <ExamplesNavbar />
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
            {/* Placehoder */}
          <Container><Row><Col>Move Image Down</Col></Row><Row><Col>Move Image Down</Col></Row></Container>
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Tools</h1>
                  <h5 className="text-on-back">Loaned</h5>
                  <p className="profile-description text-left">
                    Can't find a tool you thought you had? Check here to see if you loaned it out to someone.
                </p>
                  <div className="btn-wrapper pt-3">
                    <div className="btn-wrapper">
                      <div className="button-container">
                      <Button
                        className="btn-link"
                        color="success"
                        onClick={handleClick}
                        // onHover={handleHover}
                        onMouseOver={()=>handleHover} 
                        onMouseOut={()=>handleHover2}

                        size="sm"
                      >
                        <i className="tim-icons icon-minimal-right" />
                      </Button>
                        <Button
                          className="btn-icon btn-simple btn-round btn-neutral"
                          color="success" id="tooltip20" onClick={() => setFormModal(true)}>
                          <i className="tim-icons icon-simple-add" />
                        </Button>
                        <UncontrolledTooltip delay={0} placement="left" target="tooltip20">
                          Add Loaned Tool
                        </UncontrolledTooltip>
                        {/* Start Add Form Modal */}
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
                              <h3 className="mb-0">Add to Your Loaned Tools</h3>
                            </div>
                          </div>
                          <div className="modal-body">
                            <div className="btn-wrapper text-center">

                            </div>
                            <div className="text-center text-muted mb-4 mt-3">
                              <small>What are the details to this newly loaned tool?</small>
                            </div>
                            <Form role="addForm">
                              <FormGroup className="mb-3">
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      Name:
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Tool Name"
                                    aria-label="Tool Name"
                                    aria-describedby="basic-addon1"
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
                                  ADD TOOL
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </Modal>
                        {/* End Add Form Modal */}


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
                            <Form role="addForm">
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
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6">
                  <h2 className="profile-title text-left">Michelle Fairbanks</h2>
                  <h4 className="text-on-back">UserName</h4>
                </Col>
              </Row>
            </Container>

          </div>

        </div>

        {/* Loaned Tools list section */}
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
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

          {/* <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Loaned Out{" "}
                  <span className="text-info">please return as received</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/mechanic-toolset.jpg").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">SAE Wrench set</h4>
                        <span>Hand Tools</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        {/* <ListGroupItem>Category: {{category}}</ListGroupItem> 
                        <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Date Loaned Out</ListGroupItem>
                        <ListGroupItem>Return Promise</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/protective-gear.jpg").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Welder Gloves</h4>
                        <span>Protective Gear</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        {/* <ListGroupItem>Category: {{category}}</ListGroupItem> 
                        <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Date Loaned Out</ListGroupItem>
                        <ListGroupItem>Return Promise</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/power-tools.jpg").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Impact Wrench</h4>
                        <span>Power Tools</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        {/* <ListGroupItem>Category: {{category}}</ListGroupItem> 
                        <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Date Loaned Out</ListGroupItem>
                        <ListGroupItem>Return Promise</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container> */}


        </section>

        <Footer />
      </div>
    </>
  )
}
