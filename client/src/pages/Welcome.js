import React, { useState } from 'react';
import { Button, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";
import shedPic from "../assets/img/shedpic.jpg"

export default function Welcome() {
    const [loginRedirect, setLoginRedirect] = useState(false);

    return (
        <>
            <CustomNavbar />
            <div style={{ "height": "10vw" }}></div>
            <div>
                <div id="welcome_text" style={{ textDecoration: "underline", fontSize: "10vw" }}>
                    Welcome!
                </div>
                {/* <div className="welcome_image" style={{ backgroundImage: "url(" + shedPic + ")" }}/> */}
            </div>
            <div style={{ fontFamily: "monospace", fontSize: "3vw", "color": "grey" }}>
                <NavLink tag={Link} to="/login">
                    <NavItem>
                        <Button>Click Here</Button>
                    </NavItem>
                </NavLink> Or above to login!
               
            </div>
            <div className="welcome" >
                <div className="welcome_image" style={{ backgroundImage: "url(" + shedPic + ")" }} />
                {/* <img alt="toolshed_logo" src={require("../assets/img/shedpic.jpg").default} width="200" length="300" /> */}
            </div>
            <Footer style={{ "max-height": "6vw" }} />
        </>
    )
}
