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

import LoanedChildByCategory from "../ToolListByCategory/LoanedChildByCategory.js";
import LoanedPowerTools from "../LoanedPowerTools";
import LoanedOutdoorTools from "../LoanedOutdoorTools";
import LoanedWorkshopTools from "../LoanedWorkshopTools";
import LoanedHardware from "../LoanedHardware"
import LoanedHandTools from "../LoanedHandTools"

import "./style.css";


function LoanedToolsByCategory({ handleClickCat }) {

  const location = useLocation();

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
              Loaned Out{" "}
              <span className="text-info">Please return as received</span>
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
                        <h4 className="text-uppercase">Loaned Power Tools</h4>
                      </Link>
                      <span>Category 1</span>

                      <Route exact path="/powertools">
                        <LoanedChildByCategory catNumber={0} />
                        {/* <LoanedPowerTools/> */}
                        </Route> 
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

                      <Link to="/loanedtools" className={location.pathname === "/loanedtools" ? "nav-link active" : "nav-link"}
                        onClick={handleClickCat}
                      >
                        <span>Click Here To Show/Reload Data</span>
                        <h4 className="text-uppercase">Loaned Hand Tools</h4>
                      </Link>
                      <span>Category 2</span>

                      <Route path="/loanedtools" >
                        <LoanedChildByCategory catNumber={1} />
                      </Route>

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
                    src={require("assets/img/lawn-mower-35.png").default}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">


                      <Link to="/outdoortools" className={location.pathname === "/outdoortools" ? "nav-link active" : "nav-link"}
                        onClick={handleClickCat}
                      >
                        <span>Click Here To Show</span>
                        <h4 className="text-uppercase">Loaned Outdoor Tools</h4>
                      </Link>
                      <span>Category 3</span>
                      <Route path="/outdoortools" >
                      <LoanedChildByCategory catNumber={2} />
                      </Route>
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
                        <h4 className="text-uppercase">Loaned Workshop Tools</h4>
                      </Link>
                      <span>Category 4</span>
                      <Route path="/workshoptools" >
                      <LoanedChildByCategory catNumber={3} />
                      </Route>
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
                    src={require("assets/img/hardware-vector.png").default}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <Link to="/hardware" className={location.pathname === "/hardware" ? "nav-link active" : "nav-link"}
                        onClick={handleClickCat}
                      >
                        <span>Click Here To Show/Reload Data</span>
                        <h4 className="text-uppercase">Loaned Hardware</h4>
                      </Link>
                      <span>Category 5</span>
                      <Route path="/hardware" >
                      <LoanedChildByCategory catNumber={4} />
                      </Route>
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

export default LoanedToolsByCategory;