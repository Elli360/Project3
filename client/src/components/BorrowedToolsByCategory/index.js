import {

  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";

import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import BorrowedPowerTools from "../BorrowedPowerTools";
import BorrowedOutdoorTools from "../BorrowedOutdoorTools";
import BorrowedWorkshopTools from "../BorrowedWorkshopTools";
import BorrowedHardware from "../BorrowedHardware"
import BorrowedHandTools from "../BorrowedHandTools"

import "./style.css";


// function BorrowedToolsByCategory(params,{ handleClickCat, catBtn, revBtn, catData}) {
  function BorrowedToolsByCategory({ handleClickCat}) {
  // const[catDataRouteChild, setCatDataRouteChild] = useState(false);
  const location = useLocation();
// const catDataRouteFunc=new Promise((resolve, reject)=>{
//   const nextState=true;
// setCatDataRouteChild(nextState);
// catDataRoute(nextState);
// resolve();
// });
// catDataRouteFunc.then(()=>{
// console.log(`Message from the Child (catDataRouteChild): ${catDataRouteChild}`);
// params.catDataRouteChild2=catDataRouteChild;
// });
// const [categoryBtn, setCategoryBtn] = useState(true);
  //   const [revisedBtn, setRevisedBtn] = useState(false);
  //      const [categoryData, setCategoryData] = useState(false);

  //       let handleClickCategoryBtn = () => {
  //         //close button
  //         setCategoryBtn(false);
  //         setRevisedBtn(true);

  //         let updateUrl = new Promise ((resolve)=>
  //         resolve(setCategoryData(true)
  //          ));
  //          updateUrl.then(()=>{
  //           const nowCategoryView = {categoryView};
  //           return nowCategoryView;
  //       });
  //       };
  return (
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
                        onClick={handleClickCat}
                      >
                        <span>Click Here To Show/Reload Data</span>
                        {/* {catBtn && <span>Click Here To Show</span>}
                        {revBtn && <span>Click Here To Reload Data</span>} */}
                        <h4 className="text-uppercase">Borrowed Power Tools</h4>
                      </Link>

                      <span>Category 1</span>

                      {/* {catData && <Route exact path="/powertools" component={BorrowedPowerTools}
                       catDataRouteExec={()=>{catDataRouteFunc()}}
                        />} */}
                       <Route exact path="/powertools" component={BorrowedPowerTools} />
                      <hr className="line-primary" />
                    </Col>
                  </Row>
                  <Row>
                    {/* <ListGroup> */}
                    {/* <ListGroupItem>Category: {{category}}</ListGroupItem> */}
                    {/* <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Price</ListGroupItem>
                        <ListGroupItem>Available?</ListGroupItem>
                      </ListGroup> */}
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  {/* <Button className="btn-simple" color="primary">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
                    </Button> */}
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
                        onClick={handleClickCat}
                      >
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
                  {/* <Button className="btn-simple" color="success">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
                    </Button> */}
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
                        onClick={handleClickCat}
                      >
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
                  {/* <Button className="btn-simple" color="info">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
                    </Button> */}
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
                        onClick={handleClickCat}
                      >
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
                  {/* <Button className="btn-simple" color="info">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
                    </Button> */}
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
                        onClick={handleClickCat}
                      >
                        <span>Click Here To Show/Reload Data</span>
                        <h4 className="text-uppercase">Borrowed Hardware</h4>
                      </Link>
                      <span>Category 5</span>
                      <Route path="/hardware" component={BorrowedHardware} />
                      <hr className="line-primary" />
                    </Col>
                  </Row>
                  <Row>
                    {/* <ListGroup> */}
                    {/* <ListGroupItem>Category: {{category}}</ListGroupItem> */}
                    {/* <ListGroupItem>Description</ListGroupItem>
                        <ListGroupItem>Price</ListGroupItem>
                        <ListGroupItem>Available?</ListGroupItem>
                      </ListGroup> */}
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  {/* <Button className="btn-simple" color="info">
                      Edit
                    </Button>
                    <Button className="btn-simple" color="danger">
                      Remove from ToolShed
                    </Button> */}
                </CardFooter>
              </Card>
            </Col>



          </Row>
        </Router>
      </Container>


    </>

  )
}

export default BorrowedToolsByCategory;