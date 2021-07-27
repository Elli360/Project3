
import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function CustomNavbar() {



  //for okta
  const history = useHistory({
    // basename: "", // The base URL of the app (see below)
    // forceRefresh: false, // Set true to force full page refreshes
    // keyLength: 6, // The length of location.key
    // // A function to use to confirm navigation with the user (see below)
    // getUserConfirmation: (message, callback) => callback(window.confirm(message))
});
  const { authState, oktaAuth } = useOktaAuth();
  const login = async () => history.push('/login');
  const logout = async () => oktaAuth.signOut();
  //end
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };


  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>


            <img alt="toolshed logo" src={require("../../assets/img/toolshed_logo.jpg").default} width="200" length="300" />


          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            by Team Eight

          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>

                  the ToolShed

                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"

                href="https://github.com/elli360/project3"
                rel="noopener noreferrer"
                target="_blank"
                title="Our GitHub Repository"
              >
                <i className="fab fa-github" />
                <p className="d-lg-none d-xl-none">GitHub</p>

              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/home">

                Home
              </NavLink>
            </NavItem>
            {/* 
            <NavItem>
              <NavLink tag={Link} to="/AllCard">
                Inventory
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/delete">
                Remove
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/available">
                Available
              </NavLink>
            </NavItem> */}

            <NavItem>
              <NavLink tag={Link} to="/loaned">
                Loaned
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/borrowed">
                Borrowed
              </NavLink>
            </NavItem>


            {/* <NavItem>
              <NavLink tag={Link} to="/update">
                Update
              </NavLink>
            </NavItem> */}



            <NavItem>
              <NavLink href="https://github.com/Elli360/Project3/issues">
                Support
              </NavLink>
            </NavItem>

            {/* Okta */}
            {authState.isAuthenticated && (
              <NavItem id="profile-button">
                <Link to="/profile">Profile</Link>
              </NavItem>
            )}
            {authState.isAuthenticated && <NavItem><Button id="logout-button" onClick={logout}>Logout</Button></NavItem>}
            {!authState.isPending && !authState.isAuthenticated && <NavItem><Button onClick={login}>Login</Button></NavItem>}
            {/* Okta end */}
            
            {/* <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                href="/login"
              >
                <i className="tim-icons icon-spaceship" /> Auth

              </Button>
            </NavItem> */}

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
