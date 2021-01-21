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
import AddBtnHome from "components/AddBtnHome/AddBtnHome.js";
import SearchBtnHome from "componetns/SearchBtnHome/SearchBtnHome.js";
import Footer from "components/Footer/Footer.js";

import ToolCard from "components/ToolCard/Toolcard.js"

import bigChartData from "variables/charts.js";

// ====================== post import
import { Inputs, TextArea, FormBtn } from "../components/Form";
import API from 'utils/toolshed-api';
import React, { useEffect, useState } from "react";
import ExampleToolList from "components/ExampleToolList/ExampleToolList";

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


                <AddBtnHome/>

                   <SearchBtnHome/>

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


        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container>
              {/* ToolChest list section */}
        <ExampleToolList/>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
