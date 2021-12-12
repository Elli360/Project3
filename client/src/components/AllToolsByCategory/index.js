import {
    
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  // Button,
  // CardTitle,
  // ListGroupItem,
  // ListGroup,
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

import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {HashRouter as Router, Route } from "react-router-dom";

import ToolShedByCategory from "../PowerTools/ToolShedByCategory";
import HandTools from "../HandTools";
import OutdoorTools from "../OutdoorTools";
import WorkshopTools from "../WorkshopTools";
import Hardware from "../Hardware"




function AllToolsByCategory(props) {
    const location = useLocation();

    return(
       <>
       {/* <div ref={props.toolsByCategory}/> */}
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
{/*           
          <Router forceRefresh={true} > */}
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

                    
                      <Link to="/powertools" className={location.pathname === "/powertools" ? "nav-link active" : "nav-link"} >
                        <span>Click Here To Show</span>
                        <h4 className="text-uppercase">Power Tools</h4>
                      </Link>
                      <span>Category 1</span>
                                                  {/* Only works with React Router v6
                      <Route  exact path="/powertools" element={<ToolShedByCategory catNumber={1} />} /> */}
                      <Route  exact path="/powertools" 
                      render={(props)=>(
                      <ToolShedByCategory catNumber={1} /> )}/>
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
                    
                      <Link to="/handtools" className={location.pathname === "/handtools" ? "nav-link active" : "nav-link"} >
                      <span>Click Here To Show</span>
                      <h4 className="text-uppercase">Hand Tools</h4>
                      </Link>
                      <span>Category 2</span>
                      {/* <Route path="/handtools" component={HandTools} /> */}
                      <Route path="/handtools">
                      <ToolShedByCategory catNumber={2} /> 
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
                    src={require("assets/img/power-tools.jpg").default}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">

                    
                      <Link to="/outdoortools" className={location.pathname === "/outdoortools" ? "nav-link active" : "nav-link"} >
                      <span>Click Here To Show</span>
                      <h4 className="text-uppercase">Outdoor Tools</h4>
                      </Link>
                      <span>Category 3</span>
                      {/* <Route  path="/outdoortools" component={OutdoorTools} /> */}
                      <Route path="/outdoortools">
                      <ToolShedByCategory catNumber={3} /> 
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
                    
                      <Link to="/workshoptools" className={location.pathname === "/workshoptools" ? "nav-link active" : "nav-link"} >
                      <span>Click Here To Show</span>
                      <h4 className="text-uppercase">Workshop Tools</h4>
                      </Link>
                      <span>Category 4</span>
                      {/* <Route  path="/workshoptools" component={WorkshopTools} /> */}
                      <Route path="/workshoptools">
                      <ToolShedByCategory catNumber={4} /> 
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
                    src={require("assets/img/power-tools.jpg").default}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <Link to="/hardware" className={location.pathname === "/hardware" ? "nav-link active" : "nav-link"} >
                      <span>Click Here To Show</span>
                      <h4 className="text-uppercase"> Hardware</h4>
                      </Link>
                      <span>Category 5</span>
                      {/* <Route  path="/hardware" component={Hardware} /> */}
                      <Route path="/Hardware">
                      <ToolShedByCategory catNumber={5} /> 
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

            {/* ==========================category template */}
            {/* <Col md="4">
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
                      <h4 className="text-uppercase">Hardware</h4>
                      <span>Power Tools</span>
                      <hr className="line-info" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup> */}
                      {/* <ListGroupItem>Category: {{category}}</ListGroupItem> */}
                      {/* <ListGroupItem>Description</ListGroupItem>
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
 */}

          </Row>
          </Router>
        </Container>
        
</>

    )
}

export default AllToolsByCategory;