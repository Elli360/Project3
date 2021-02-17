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
  Row,
  Col,
  // Card,
  // CardHeader,
  // CardBody,
  // CardFooter,
  // CardTitle,
  // ListGroupItem,
  // ListGroup,
  // Container,
  // FormGroup,
  // UncontrolledTooltip,
  // UncontrolledPopover,
  // PopoverBody,
  // PopoverHeader,
  // Modal,
  // Form,
  // Input,
  // InputGroup,
  // InputGroupAddon,
  // InputGroupText,
  // Label,
  // UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import ToolCard from "components/ToolCard/Toolcard.js"

import bigChartData from "variables/charts.js";

// ====================== post import
import { Inputs, TextArea, FormBtn } from "../components/Form";
import API from 'utils/toolshed-api';
import React, { useEffect, useState } from "react";


import DeleteCard from "components/ToolCard/DeleteCard.js";
// import DeleteCard from "../components/ToolCard/DeleteCard"
// import DeleteBtn from "../components/DeleteBtn";
// import { List, ListItem } from "../components/List";
import Select from "react-dropdown-select";
import Categories from "../components/Categories";
// import Intro from "../components/Intro";
import AllCard from "../components/ToolCard/AllCard";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import UpdateCard from "../components/ToolCard/UpdateCard"
import Available from "../components/ToolCard/Available";
import NotAvailable from "../components/ToolCard/NotAvailable";
import AddTool from "../components/AddToolBtnHome";
import SearchBtnHome from "../components/SearchBtnHome";

//==========================

export default function Home() {
//  var displayAllByCategory=true;
   const [displayAllByCategory, setDisplayAllByCategory] = useState( false);
   //let click=false;
  const handleClick =()=> {
  //  if (displayAllByCategory) {
    //  useEffect(() => {
      //  loadTools();
    //  }, [])
    setDisplayAllByCategory(true);
  //  }
 };
//  handleClick();
// React.useEffect(() => {
//     document.body.classList.toggle("landing-page");
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       document.body.classList.toggle("landing-page");
//     };
//   }, []);  

  //==============================================
  //const [tools, setTools] = useState([]);


 // function loadTools() {
 //   API.getCategories().then(res => setTools(res.data)).catch(err => console.log(err))
 // };

  // useEffect(() => {
  //   loadTools()
  // }, [])




  return (
    <>

      <Router>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="BLOB"
              className="path"
              src={require("assets/img/blob.png").default}
            />
            <img
              alt="PATH2"
              className="path2"
              src={require("assets/img/path2.png").default}
            />
            <img
              alt="SHAPES TRIANGLE"
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png").default}
            />
            <img
              alt="SHAPES WAVE"
              className="shapes wave"
              src={require("assets/img/waves.png").default}
            />
            <img
              alt="...SHAPES SQUARES"
              className="shapes squares"
              src={require("assets/img/patrat.png").default}
            />
            <img
              alt="SHAPES CIRCLE"
              className="shapes circle"
              src={require("assets/img/cercuri.png").default}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">

                  {/* <Route exact path="/home" component={Intro} /> */}
                  <div>
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
          // href="/AllCard"
        //  onClick={setDisplayAllByCategory(true)}
         onClick={handleClick}
          size="sm"
        >
          <i className="tim-icons icon-minimal-right" />
        </Button>
      </div>
      </div>
                    {/* <Intro /> */}
                  <div className="btn-wrapper">
                    <div className="button-container">
                   <AddTool />
                   <SearchBtnHome />
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
                    src={require("assets/img/shedpic.jpg").default}

                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Router>


  {/*Dynamic rendering of tools db 
  <div>

<ToolCard categories={tools} />

</div>*/}

      <div>

        {/* ToolChest list section */}
      {/* Pre-render alter
        <Categories /> */}

{ displayAllByCategory && 
<Categories />
 } 


        <Footer />
      </div>

    </>
  );
}
