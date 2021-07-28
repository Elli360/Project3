
import React, { useEffect, useState, useRef } from "react";
// react plugin used to create charts
// import { Line } from "react-chartjs-2";
// import classnames from "classnames";
// react plugin used to create datetimepicker
// import ReactDatetime from "react-datetime";
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
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";

// import ToolCard from "components/ToolCard/Toolcard.js"

// import bigChartData from "variables/charts.js";

// // ====================== post import
// import { Inputs, TextArea, FormBtn } from "../components/Form";

// import api from 'utils/api';



import DeleteCard from "components/ToolCard/DeleteCard.js";
// import DeleteCard from "../components/ToolCard/DeleteCard"
// import DeleteBtn from "../components/DeleteBtn";
// import { List, ListItem } from "../components/List";
//import Select from "react-dropdown-select";
import AllToolsByCategory from "../components/AllToolsByCategory";
// import Intro from "../components/Intro";
import AllCard from "../components/ToolCard/AllCard";
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
// import UpdateCard from "../components/ToolCard/UpdateCard"
import Available from "../components/ToolCard/Available";
//import NotAvailable from "../components/ToolCard/NotAvailable";
import AddTool from "../components/AddToolBtnHome";
import SearchBtnHome from "../components/SearchBtnHome";
//import Loaned from "./Loaned";
//==========================

export default function Home() {
  const toolsByCategory = useRef();
  //  var displayAllByCategory=true;
  let [displayAllByCategory, setDisplayAllByCategory] = useState(false);
  let [toolshedImgOpacity, setToolshedImgOpacity] = useState(0.2);

  let handleClick = () => {
    setDisplayAllByCategory(true);
    toolsByCategory.current.scrollIntoView({
      behavior: "smooth",
    });
   
  };

  let close = () => {
    setDisplayAllByCategory(false);
  }
  //onHover of button, changes opacity of toolshed image (NOT WORKING)
  let handleHover = () => {
    setToolshedImgOpacity(1);
  }
  let handleHover2 = () => {
    setToolshedImgOpacity(0.2);
  }
  //  handleClick();    
 useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  //==============================================
  // let [tools, setTools] = useState([]);


  // function loadTools() {
  //   api.getCategories().then(res => setTools(res.data)).catch(err => console.log(err))
  // };

  // useEffect(() => {
  //   loadTools()
  // }, [])




  return (
    <>
      <CustomNavbar />
      <Router>

        {/* <ExamplesNavbar /> */}
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
                        onClick={handleClick}
                        // onHover={handleHover}
                        onMouseOver={() => handleHover}
                        onMouseOut={() => handleHover2}

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
                    {/* <Route exact path="/update" component={UpdateCard} /> */}
                    <Route exact path="/available" component={Available} />
                    {/* <Route exact path="/loaned" component={NotAvailable} /> */}
                    {/* <Route exact path="/loaned" component={Loaned} /> */}

                    {/* <div>
                          <DeleteCard/>
                        </div> */}



                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img id="toolshed"
                    alt="toolshed"
                    className="img-fluid"
                    src={require("assets/img/shedpic.jpg").default}
                    opacity={toolshedImgOpacity}
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
        <section className="section section-lg section-coins">
          {/* ToolChest list section */}
          {/* Pre-render alter
        <Categories /> */}
          {displayAllByCategory && <Button
            className="button"
            color="danger"
            onClick={close}
            size="lg"
          >Close The Door
          </Button>}

          {displayAllByCategory &&
            <AllToolsByCategory/>
            // <AllToolsByCategory toolsByCategory={toolsByCategory}/>
          }
        </section>
        <div ref={toolsByCategory} />
        <Footer />
      </div>

    </>
  );
}
