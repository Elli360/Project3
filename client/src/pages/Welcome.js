import React from 'react';
import { Button, NavItem, NavLink } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";
import shedPic from "../assets/img/shedpic.jpg"

export default function Welcome() {
    const history = useHistory({});
    const { authState, oktaAuth } = useOktaAuth();
    const login = async () => history.push('/login');
    const logout = async () => oktaAuth.signOut();

    return (
        <>
            <CustomNavbar />
            <div style={{ "height": "10vw" }}></div>
            <div>
                <div id="welcome_text" style={{ textDecoration: "underline", fontSize: "8vw" }}>
                    Welcome!  <img alt="toolshed_logo" src={require("../assets/img/shedpic.jpg").default} width="200" length="300" />
                </div>
                {/* <div className="welcome_image" style={{ backgroundImage: "url(" + shedPic + ")" }}/> */}
            </div>

            {authState.isAuthenticated && 
            <div style={{ fontFamily: "monospace", fontSize: "3vw", "color": "grey" }}>
            <NavItem>
                Hope you are enjoying The Toolshed! 
                <div>- Return to Home with  
                <Button>
                    <NavLink tag={Link} to="/home" style={{ "color": "white" }}>
                        Click Here
                    </NavLink>
                </Button></div> <div>- click the 'Home' link above</div> - logout with
                <Button onClick={logout} style={{ "color": "white" }}>
                        Click Here
                </Button>
            </NavItem>
            Or click the 'Logout' link above!
        </div>
           }

            {!authState.isPending && !authState.isAuthenticated && 
            <div style={{ fontFamily: "monospace", fontSize: "3vw", "color": "grey" }}>
            <NavItem title="notWelcomeNavItem">
                <Button style={{ "color": "white" }} onClick={login}>
                        Click Here
                </Button>
            </NavItem>
            Or click above to login!
        </div>
            }

            <div className="welcome" >
                <div className="welcome_image" style={{ backgroundImage: "url(" + shedPic + ")" }} />
            </div>
            <Footer style={{ "max-height": "6vw" }} />
        </>
    )
}
