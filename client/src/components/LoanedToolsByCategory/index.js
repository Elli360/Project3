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
  import { BrowserRouter as Router, Route } from "react-router-dom";
  import LoanedPowerTools from "../LoanedPowerTools";
  import LoanedOutdoorTools from "../LoanedOutdoorTools";
  import LoanedWorkshopTools from "../LoanedWorkshopTools";
  import LoanedHardware from "../LoanedHardware"
  import LoanedHandTools from "../LoanedHandTools"
  
  
  
  function LoanedToolsByCategory() {
      const location = useLocation();
  
      return(
          <>
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
            
            <Router>
            <Row>
  
  {/* ========================= 1st category */}
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
  
                      
                        <Link to="/powertools" className={location.pathname === "/powertools" ? "nav-link active" : "nav-link"} >
                          <span>Click Here</span>
                          <h4 className="text-uppercase">Loaned Power Tools</h4>
                        </Link>
                        <span>Category 1</span>
  
                        <Route  exact path="/powertools" component={LoanedPowerTools} />
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
                      src={require("assets/img/protective-gear.jpg").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                      
                        <Link to="/loanedtools" className={location.pathname === "/loanedtools" ? "nav-link active" : "nav-link"} >
                        <span>Click Here</span>
                        <h4 className="text-uppercase">Loaned Hand Tools</h4>
                        </Link>
                        <span>Category 2</span>
  
                        <Route path="/loanedtools" component={LoanedHandTools} />
                      
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
                        <span>Click Here</span>
                        <h4 className="text-uppercase">Loaned Outdoor Tools</h4>
                        </Link>
                        <Route  path="/outdoortools" component={LoanedOutdoorTools} />
                        <span>Category 3</span>
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
                      src={require("assets/img/power-tools.jpg").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                      
                        <Link to="/workshoptools" className={location.pathname === "/workshoptools" ? "nav-link active" : "nav-link"} >
                        <span>Click Here</span>
                        <h4 className="text-uppercase">Loaned Workshop Tools</h4>
                        </Link>
                        <span>Category 4</span>
                        <Route  path="/workshoptools" component={LoanedWorkshopTools} />
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
                        <span>Click Here</span>
                        <h4 className="text-uppercase">Loaned Hardware</h4>
                        </Link>
                        <span>Category 5</span>
                        <Route  path="/hardware" component={LoanedHardware} />
                      
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