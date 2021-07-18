import React from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";
import shedPic from "../assets/img/shedpic.jpg"

export default function Welcome() {
    return (
        <>
            <CustomNavbar />
            <div style={{ "height": "10vw" }}></div>
            <div>
                <div id="welcome_text" style={{ "text-decoration": "underline", "font-size": "10vw" }}>
                    Welcome!
                </div>
                {/* <div className="welcome_image" style={{ backgroundImage: "url(" + shedPic + ")" }}/> */}
            </div>
            <div style={{ "font-family": "monospace", "font-size": "5vw", "color": "grey" }}>
                Click the Login option above!
            </div>
            <div className="welcome" >
                <div className="welcome_image" style={{ backgroundImage: "url(" + shedPic + ")" }} />
                {/* <img alt="toolshed_logo" src={require("../assets/img/shedpic.jpg").default} width="200" length="300" /> */}
            </div>
            <Footer style={{ "max-height": "6vw" }} />
        </>
    )
}
