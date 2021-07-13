import React from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";


export default function Welcome() {
    return (
        <>
           <CustomNavbar /> 
           <div style={{"height":"10vw"}}></div>
           <div style={{"text-decoration":"underline","font-size":"10vw"}}>
               Welcome! 
               </div>
               <div style={{"font-family":"monospace","font-size":"5vw", "color":"grey"}}>
               Click the Login option above!
               </div>
               {/* <div style={{"height":"15vw", backgroundImage:"url(../assets/img/shedpic.jpg)"}}></div> */}
               <div className="welcome"><img alt="toolshed_logo" src={require("../assets/img/shedpic.jpg").default} width="200" length="300" /></div>
           <Footer style={{"max-height":"6vw"}}/>
        </>
    )
}
