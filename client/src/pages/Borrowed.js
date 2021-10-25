
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo
} from "react";
// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
// import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import { HashRouter as Router, Route, Link, useLocation } from "react-router-dom";

import {

  Container,
  Row,
  Col,
  Button,
  UncontrolledCarousel,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap";

// core components

//import ToolShedNavbar from "../components/Navbars/ToolShedNavbar.js";
import AddBtnBorrowed from "../components/Buttons/AddBtnBorrowed.js";

// import ViewToolsBtn from "../components/ViewToolsBtn/index.js"
import Footer from "../components/Footer/Footer.js";
import SearchBtnBorrowed from "../components/Buttons/SearchBtnBorrowed.js";
import SearchBtnOutNetwork from "../components/Buttons/SearchBtnOutNetwork.js";
// import BorrowedToolsByCategory from "components/BorrowedToolsByCategory";
// import ExampleToolList from "../components/ExampleToolList/ExampleToolList";
import UserNameDisplay from "../components/UserNameDisplay/UserNameDisplay.js";
import UpdateBorrowedCard from "components/ToolCard/UpdateBorrowedCard";
import ScrollToTop from "components/ScrollToTop/index.js";
import CustomNavbar from "../components/Navbars/CustomNavbar.js";
import Spacer from "../components/Spacer/index.js";
import AddBtnBorrowedDirectory from "components/Buttons/AddBtnBorrowedDirectory.js";
import ViewToolsBtn from "components/Buttons/ViewToolsBtn.js";


import BorrowedPowerTools from "components/BorrowedPowerTools";
import BorrowedOutdoorTools from "components/BorrowedOutdoorTools";
import BorrowedWorkshopTools from "components/BorrowedWorkshopTools";
import BorrowedHardware from "components/BorrowedHardware"
import BorrowedHandTools from "components/BorrowedHandTools"


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
  // const toolsCategory1 = useRef();

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

    let updateUrl = new Promise((resolve) =>
      resolve(setHandleClickUpdateBorrowed(true)
      ));
    updateUrl.then(() => {
      setInterval(borrowedUpdate.current.scrollIntoView({
        behavior: 'smooth', inline: 'center', block: 'nearest'
      }), 500);
    });
  };



  const [categoryData, setCategoryData] = useState(false);
  // const [category1Btn, setCategory1Btn] = useState(true);
  // const [revised1Btn, setRevised1Btn] = useState(false);
  // const [category2Btn, setCategory2Btn] = useState(true);
  // const [revised2Btn, setRevised2Btn] = useState(false);
  // const [category3Btn, setCategory3Btn] = useState(true);
  // const [revised3Btn, setRevised3Btn] = useState(false);
  // const [category4Btn, setCategory4Btn] = useState(true);
  // const [revised4Btn, setRevised4Btn] = useState(false);
  // const [category5Btn, setCategory5Btn] = useState(true);
  // const [revised5Btn, setRevised5Btn] = useState(false);

  // const handleClickCatBtnMemo = useMemo((catNumber, catNumber2) =>{
  //   const setCatBtnName = `setCategory${catNumber}Btn(false)`;
  //   const setRevBtnName = `setRevised${catNumber}Btn(true)`;
  //   setCatBtnName();
  //   setRevBtnName();
  // },[])
  const handleClickCategoryBtn = useCallback(
    // (catNumber) => {
    () => {
      const handleClickCategoryBtnPromise = new Promise((resolve, reject) => {
        // close button
        // handleClickCatBtnMemo();
        //   useMemo((catNumber) => {    
        //     const setCatBtnName = () => {return(<>{`setCategory${catNumber}Btn(false)`}</>)};
        //   const setRevBtnName = () => {return(<>{`setRevised${catNumber}Btn(true)`}</>)};
        // }, )
        // const setCatBtnName = `setCategory${catNumber}Btn(false)`;
        // const setRevBtnName = `setRevised${catNumber}Btn(true)`;
        // setCatBtnName();
        // setRevBtnName();

        // setCategoryData(true);
        resolve(setCategoryData(true));
        // resolve(setCategoryData(true),setCatBtnName,setRevBtnName);
        // console.log(`${setCatBtnName} ,  ${setRevBtnName()}`);      
      });

      handleClickCategoryBtnPromise.then(() => {
        setTimeout(() => {
          toolsByCategory.current.scrollIntoView({
            behavior: "smooth", inline: 'center', block: 'center'
          });
          console.log(`INSIDE setTimeout=>categoryData:${categoryData}`);
          // console.log(`setCatBtnName${setCatBtnName}`);
        }, 50);

      });
    }, [categoryData]);
  // }, [categoryData,handleClickCatBtnMemo]);

  return (
    <>
      <CustomNavbar />
      {/* <Router forceRefresh={true} > */}
      <Router >
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

              //   <BorrowedToolsByCategory handleClickCat={() => handleClickCategoryBtn()} catBtn={categoryBtn} revBtn={revisedBtn} catData={categoryData} catDataRouteChild2 />
              // }
              // ---------------------------------------------------------------------------------------------
              // Start of BorrowedToolsByCategory
              // --------------------------------------------------------------------------------------------- 
              <>
                <img
                  alt="..."
                  className="path"
                  src={require("assets/img/path3.png").default}
                />

                <Container id="loaned_by_cat">
                  <Row>
                    <Col md="4" >
                      <hr className="line-info" />
                      <h1>
                        Borrowed,{" "}
                        <span className="text-info"> Be Curtious to Ur Neighbor</span>
                      </h1>
                    </Col>
                  </Row>

                  {/* <Router forceRefresh={true} > */}
                  <Router >
                    <Row>

                      {/* ========================= 1st category */}
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


                                <Link to="/powertools" className={location.pathname === "/powertools" ? "nav-link active" : "nav-link"}
                                  onClick={() => {
                                    handleClickCategoryBtn();
                                    // handleClickCatBtnMemo(1,1);
                                    console.log(`INSIDE Route=>categoryData:${categoryData}`);
                                  }} >

                                  {/* {category1Btn && <span>Click Here To Show</span>}
                                  {revised1Btn && <span>Click Here To Reload Data</span>} */}
                                  <span>Click Here To Show/Reload Data</span>
                                  <h4 className="text-uppercase">Borrowed Power Tools</h4>
                                </Link>

                                <span>Category 1</span>

                                {categoryData && <Route exact path="/powertools" component={BorrowedPowerTools} />}
                                <hr className="line-primary" />
                              </Col>
                            </Row>
                            <Row>

                            </Row>
                          </CardBody>
                          <CardFooter className="text-center">

                          </CardFooter>
                        </Card>
                      </Col>

                      {/* ========================= 2nd category */}
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

                                <Link to="/Borrowedtools" className={location.pathname === "/Borrowedtools" ? "nav-link active" : "nav-link"}
                                  onClick={() => {
                                    handleClickCategoryBtn();
                                  }} >

                                  {/* {category2Btn && <span>Click Here To Show</span>}
                                  {revised2Btn && <span>Click Here To Reload Data</span>} */}
                                  <span>Click Here To Show/Reload Data</span>
                                  <h4 className="text-uppercase">Borrowed Hand Tools</h4>
                                </Link>
                                <span>Category 2</span>

                                <Route path="/Borrowedtools" component={BorrowedHandTools} />

                                <hr className="line-success" />
                              </Col>
                            </Row>

                          </CardBody>
                          <CardFooter className="text-center">

                          </CardFooter>
                        </Card>
                      </Col>

                      {/* ========================= 3rd category */}
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


                                <Link to="/outdoortools" className={location.pathname === "/outdoortools" ? "nav-link active" : "nav-link"}
                                  onClick={() => {
                                    handleClickCategoryBtn();
                                  }} >
                                  {/* 
                                  {category3Btn && <span>Click Here To Show</span>}
                                  {revised3Btn && <span>Click Here To Reload Data</span>} */}
                                  <span>Click Here To Show/Reload Data</span>
                                  <h4 className="text-uppercase">Borrowed Outdoor Tools</h4>
                                </Link>
                                <span>Category 3</span>
                                <Route path="/outdoortools" component={BorrowedOutdoorTools} />
                                <hr className="line-info" />
                              </Col>
                            </Row>

                          </CardBody>
                          <CardFooter className="text-center">

                          </CardFooter>
                        </Card>
                      </Col>


                      {/* ========================= 4rd category */}
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

                                <Link to="/workshoptools" className={location.pathname === "/workshoptools" ? "nav-link active" : "nav-link"}
                                  onClick={() => {
                                    handleClickCategoryBtn();
                                  }} >

                                  {/* {category4Btn && <span>Click Here To Show</span>}
                                  {revised4Btn && <span>Click Here To Reload Data</span>} */}
                                  <span>Click Here To Show/Reload Data</span>
                                  <h4 className="text-uppercase">Borrowed Workshop Tools</h4>
                                </Link>
                                <span>Category 4</span>
                                <Route path="/workshoptools" component={BorrowedWorkshopTools} />
                                <hr className="line-danger" />
                              </Col>
                            </Row>

                          </CardBody>
                          <CardFooter className="text-center">

                          </CardFooter>
                        </Card>
                      </Col>


                      {/* ========================= 5th category */}
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
                                <Link to="/hardware" className={location.pathname === "/hardware" ? "nav-link active" : "nav-link"}
                                  onClick={() => {
                                    handleClickCategoryBtn();
                                  }} >

                                  {/* {category5Btn && <span>Click Here To Show</span>}
                                  {revised5Btn && <span>Click Here To Reload Data</span>} */}
                                  <span>Click Here To Show/Reload Data</span>
                                  <h4 className="text-uppercase">Borrowed Hardware</h4>
                                </Link>
                                <span>Category 5</span>
                                <Route path="/hardware" component={BorrowedHardware} />
                                <hr className="line-primary" />
                              </Col>
                            </Row>
                            <Row>

                            </Row>
                          </CardBody>
                          <CardFooter className="text-center">

                          </CardFooter>
                        </Card>
                      </Col>



                    </Row>
                  </Router>
                </Container>




                {/* ---------------------------------------------------------------------------------------------
End of BorrowedToolsByCategory
--------------------------------------------------------------------------------------------- */}
              </>
            }

          </section>

          <div ref={toolsByCategory} />
          <Footer />
        </div>
      </Router>
    </>
  );
}
