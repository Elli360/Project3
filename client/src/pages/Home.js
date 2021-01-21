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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ToolShedNavbar from "components/Navbars/ToolShedNavbar.js";
import Footer from "components/Footer/Footer.js";

import ToolCard from "components/ToolCard/Toolcard.js"

import bigChartData from "variables/charts.js";

// ====================== post import
import { Inputs, TextArea, FormBtn } from "../components/Form";
import API from 'utils/toolshed-api';
import React, { useEffect, useState } from "react";

//==========================

export default function Home() {

  const [formModalAdd, setFormModalAdd] = React.useState(false);
  const [formModalSearch, setFormModalSearch] = React.useState(false);
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


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.categoryId) {
      API.saveTool({
        name: formObject.name,
        description: formObject.description,
        categoryId: formObject.categoryId,
        price: formObject.price
        // price: formObject.price,
        // available:formObject.available
      })
        .then(() => setFormObject({
          name: "",
          description: "",
          price: 0,
          categoryId: 0
          // price: "",
          // available:null
        }))
        .then(() => loadTools())
        .catch(err => console.log(err));
    }

  };

  const [formObject, setFormObject] = useState({
    name: "",
    description: "",
    price: [],
    categoryId: []
  });


  //==============================================




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
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Open the door to your ToolShed
                  </p>

                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">


                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="success" id="tooltip10" onClick={() => setFormModalAdd(true)}>
                      <i className="tim-icons icon-simple-add" />
                    </Button>
                    <UncontrolledTooltip delay={0} placement="left" target="tooltip10">
                      Add to ToolShed
                    </UncontrolledTooltip>
                    {/* Start Add Form Modal */}
                    <Modal
                      modalClassName="modal-black"
                      isOpen={formModalAdd}
                      toggle={() => setFormModalAdd(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <button className="close" onClick={() => setFormModalAdd(false)}>
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
                                onChange={handleInputChange}
                                name="name"
                                placeholder="name (required)"
                                value={formObject.name}
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
                                onChange={handleInputChange}
                                name="categoryId"
                                placeholder="id (Mandatory)"
                                value={formObject.categoryId}
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
                                onChange={handleInputChange}
                                name="description"
                                placeholder="description (required)"
                                value={formObject.description}
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
                                onChange={handleInputChange}
                                name="price"
                                placeholder="price (Optional)"
                                value={formObject.price}
                              />
                            </InputGroup>
                          </FormGroup>
                          {/* <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    Loaned To:
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  onChange={handleInputChange}
                                  name="name"
                                  placeholder="name (required)"
                                  value={formObject.name}
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
                                  onChange={handleInputChange}
                              name="price"
                              
                              value={formObject.price}
                                />
                              </InputGroup>
                            </FormGroup> */}

                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                              type="button"
                              disabled={!(formObject.name && formObject.categoryId)}
                              onClick={handleFormSubmit}
                            >
                              ADD TOOL
                              </Button>
                          </div>
                        </Form>
                      </div>
                    </Modal>
                    {/* End Add Form Modal */}

                    {/* ======================================================================== */}
                    {/* Start Add Form Modal */}
                    {/* <Modal
                      modalClassName="modal-black"
                      isOpen={formModal}
                      toggle={() => setFormModal(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <button className="close" onClick={() => setFormModal(false)}>
                          <i className="tim-icons icon-simple-remove text-white" />
                        </button>
                        <div className="text-muted text-center ml-auto mr-auto">
                          <h3 className="mb-0">Add to Your ToolShed</h3>
                        </div>
                      </div>
                      <div className="modal-body">
          {/* ====== mod==================================*/}
                    {/* <form>
                        <Inputs
                          onChange={handleInputChange}
                          name="title"
                          placeholder="Title (required)"
                          value={formObject.title}
                        />
                        <Inputs
                          onChange={handleInputChange}
                          name="author"
                          placeholder="Author (required)"
                          value={formObject.author}
                        />
                        <TextArea
                          onChange={handleInputChange}
                          name="synopsis"
                          placeholder="Synopsis (Optional)"
                          value={formObject.synopsis}
                        />
                        <FormBtn
                          disabled={!(formObject.author && formObject.title)}
                          onClick={handleFormSubmit}
                        >
                          Submit Tool
                        </FormBtn>
                      </form>
              {/* ======================================= */}
                    {/* </div>
                    </Modal> */}
                    {/* End Add Form Modal */}
                    {/* =================================================================== */}

                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="success" id="tooltip121" onClick={() => setFormModalSearch(true)}>
                      <i className="tim-icons icon-zoom-split" />
                    </Button>
                    <UncontrolledTooltip placement="right" target="tooltip121">
                      Add to the ToolShed
                    </UncontrolledTooltip>

                    {/* Start Search Form Modal */}
                    <Modal
                      modalClassName="modal-black"
                      isOpen={formModalSearch}
                      toggle={() => setFormModalSearch(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <button className="close" onClick={() => setFormModalSearch(false)}>
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
                                onChange={handleInputChange}
                                name="name"
                                placeholder="name (required)"
                                value={formObject.name}
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

                    {/* Start Search Form Modal */}
                    {/* <Modal
                      modalClassName="modal-black"
                      isOpen={formModalSearch}
                      toggle={() => setFormModalSearch(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <button className="close" onClick={() => setFormModalSearch(false)}>
                          <i className="tim-icons icon-simple-remove text-white" />
                        </button>
                        <div className="text-muted text-center ml-auto mr-auto">
                          <h3 className="mb-0">Add to the ToolShed</h3>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="btn-wrapper text-center">

                        </div>
                        <div className="text-center text-muted mb-4 mt-3">
                          <small>Describe what you are looking for in your ToolShed</small>
                        </div>
                        <div>
                          {/* ====== mod==================================*/}
                    {/*  <form>
                            <Inputs
                              onChange={handleInputChange}
                              name="name"
                              placeholder="name (required)"
                              value={formObject.name}
                            />
                            <Inputs
                              onChange={handleInputChange}
                              name="description"
                              placeholder="description (required)"
                              value={formObject.description}
                            />
                            <Inputs
                              onChange={handleInputChange}
                              name="price"
                              placeholder="price (Optional)"
                              value={formObject.price}
                            />
                            <Inputs
                              onChange={handleInputChange}
                              name="categoryId"
                              placeholder="id (Mandatory)"
                              value={formObject.categoryId}
                            />

                            <FormBtn
                              disabled={!(formObject.name && formObject.categoryId)}
                              onClick={handleFormSubmit}
                            >
                              Submit Tool
                        </FormBtn>
                          </form>
                          {/* ======================================= */}
                    {/* </div>


                      </div>
                    </Modal> */}
                    {/* End Search Form Modal */}
                  </div>



                </div>
              </Col>
              <Col lg="4" md="5">
                <img id="toolshed"
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/shedpic.jpg").default}

                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div>
        {/*Dynamic rendering of tools db */}
        <div>

          <ToolCard categories={tools} />

        </div>

        {/* ToolChest list section */}
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
                  Tools{" "}
                  <span className="text-info">in the ToolShed</span>
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
                        {/* <ListGroupItem>Category: {{category}}</ListGroupItem> */}
                        <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Price</ListGroupItem>
                        <ListGroupItem>Available?</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
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
                        {/* <ListGroupItem>Category: {{category}}</ListGroupItem> */}
                        <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Price</ListGroupItem>
                        <ListGroupItem>Available?</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
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
                        {/* <ListGroupItem>Category: {{category}}</ListGroupItem> */}
                        <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Price</ListGroupItem>
                        <ListGroupItem>Available?</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
