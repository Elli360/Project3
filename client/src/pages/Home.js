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
import { BrowserRouter as Router, Route } from "react-router-dom";



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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import ToolCard from "components/ToolCard/Toolcard.js"

import bigChartData from "variables/charts.js";

// ====================== post import
import { Inputs, TextArea, FormBtn } from "../components/Form";
import API from 'utils/toolshed-api';
import React , { useEffect, useState } from "react";


import DeleteCard from "components/ToolCard/DeleteCard.js";
// import DeleteCard from "../components/ToolCard/DeleteCard"
// import DeleteBtn from "../components/DeleteBtn";
// import { List, ListItem } from "../components/List";
import Select from "react-dropdown-select";
import Categories from "../components/Categories/Categories";
import Intro from "../components/Intro/Intro";
import AllCard from "../components/ToolCard/AllCard";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import UpdateCard from "../components/ToolCard/UpdateCard"
import Available from "../components/ToolCard/Available";
import NotAvailable from "../components/ToolCard/NotAvailable";



//==========================

export default function Home() {

  const [formModal, setFormModal] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

//==============================================
const [tools,setTools]=useState([]);


function loadTools(){
  API.getCategories().then(res=>setTools(res.data)).catch(err=>console.log(err))
};

useEffect(()=>{
  loadTools()
},[])


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
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
          price:0,
          categoryId: 0
          // price: "",
          // available:null
          }))
        .then(() => loadTools())
        .catch(err => console.log(err));
        }
        setFormModal(false);
  };

  const [formObject, setFormObject] = useState({
    name:"",
    description:"",
    price:[],
    categoryId: []
  });


  return (
    <>
    
    <Router>
      <ExamplesNavbar />
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

              <Route exact path="/home" component={Intro} />

                  <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="success" id="tooltip10" onClick={() => setFormModal(true)}>
                      <i className="tim-icons icon-simple-add" />
                    </Button>
                    <UncontrolledTooltip delay={0} placement="left" target="tooltip10">
                      Add to ToolShed
                    </UncontrolledTooltip>
             

  {/* ======================================================================== */}
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
                          <h3 className="mb-0">Add to Your ToolShed</h3>
                        </div>
                      </div>
                      <div className="modal-body">
          {/* ====== mod==================================*/}
          <form>
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
                          placeholder="price (required)"
                          value={formObject.price}
                        />


                                
                               <label>
                                  Tool Category:
                                  <select value={formObject.categoryId} name="categoryId" onChange={handleInputChange}>
                                    <option value={1}>Power Tools</option>
                                    <option value={2}>Handtools</option>
                                    <option value={3}>Outdoor</option>
                                    <option value={4}>Workshop tools</option>
                                    <option value={5}>Hardware</option>

                                  </select>
                                </label>
                                                        

                              {/* <Inputs
                                  onChange={handleInputChange}
                                  name="categoryId"
                                  placeholder="Category Id (Mandatory)"
                                  value={formObject.categoryId}
                                /> */}



]                        <FormBtn
                          disabled={!(formObject.name && formObject.description && formObject.price && formObject.categoryId)}
                          onClick={handleFormSubmit}
                        >
                          Submit Tool
                        </FormBtn>
                      </form>
              {/* ======================================= */}
                      </div>
                    </Modal>
                    {/* End Add Form Modal */}
{/* =================================================================== */}


                         </div>

                     {/* <div>

                        <ToolCard categories={tools}/>


                  </div> */}

                    <Route exact path="/delete" component={DeleteCard} />
                    <Route exact path="/AllCard" component={AllCard} />
                    <Route exact path="/update" component={UpdateCard} />
                    <Route exact path="/available" component={Available} />
                    <Route exact path="/loaned" component={NotAvailable} />


                        {/* <div>
                          <DeleteCard/>
                        </div> */}



                </div>
              </Col>
              <Col lg="4" md="5">
                <img id="toolshed"
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/toolshed.jpg").default}

                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      </Router>

      <div>

        {/* ToolChest list section */}

        <Categories/>

        <Footer />
      </div>

    </>
  );
}
