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
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import "./style.css";
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">

            <h2 className="title">Team Eight</h2>

          </Col>
          <Col md="3">
            <Nav>
            Contacts:
            <NavItem>
            <img className="contact_icon" id="linkedinIcon" alt="LinkedIn_Image" src={require("../../assets/img/icon-linkedin.png").default} /> 
            </NavItem>
              <NavItem>
                <NavLink href="https://linkedin.com/in/danielli-franquim-85224570">
                   Danielli
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/shalom-dawit-a0a5a4126">
                   Shalom
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/troylochner/">
                   Troy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/luis-calderin-a3b06112b/">
                   Luis

                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          
          <Col md="3">

            <h3 className="title">Follow us on GitHub:</h3>

            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"

                href="https://github.com/elli360/"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow Danielli on GitHub

              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"

                href="https://github.com/mrdawit"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Follow Shalom on GitHub

              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"

                href="https://github.com/troylochner"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow Troy on GitHub
              </UncontrolledTooltip>  <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://github.com/lcalderin12"
                id="tooltip318450379"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450379">
                Follow Luis on GitHub

              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
