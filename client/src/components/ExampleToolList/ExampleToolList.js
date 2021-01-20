import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

export default function ExampleToolList() {
return (
    <>


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
               <ListGroupItem>Description</ListGroupItem>
               <ListGroupItem>Date Borrowed</ListGroupItem>
               <ListGroupItem>Return Promise</ListGroupItem>
             </ListGroup>
           </Row>
         </CardBody>
         <CardFooter className="text-center">
           <Button className="btn-simple" color="primary">
             Edit
           </Button>
           <Button className="btn-simple" color="danger">
             Remove
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
               <ListGroupItem>Description</ListGroupItem>
               <ListGroupItem>Date Borrowed</ListGroupItem>
               <ListGroupItem>Return Promise</ListGroupItem>
             </ListGroup>
           </Row>
         </CardBody>
         <CardFooter className="text-center">
           <Button className="btn-simple" color="success">
             Edit
           </Button>
           <Button className="btn-simple" color="danger">
             Remove
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
               <ListGroupItem>Description</ListGroupItem>
               <ListGroupItem>Date Borrowed</ListGroupItem>
               <ListGroupItem>Return Promise</ListGroupItem>
             </ListGroup>
           </Row>
         </CardBody>
         <CardFooter className="text-center">
           <Button className="btn-simple" color="info">
             Edit
           </Button>
           <Button className="btn-simple" color="danger">
             Remove
           </Button>
         </CardFooter>
       </Card>
     </Col>
   </Row>
</>

    )
}