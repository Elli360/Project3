import React from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function Welcome() {
    return (
        <>
           <CustomNavbar /> 
           <div style={{"height":"10vw"}}></div>
           <div style={{"font-size":"10vw"}}>
               Welcome! 
               </div>
               <div style={{"font-size":"5vw", "color":"grey"}}>
               Click the Login button above in-order to use our app!
               </div>
               <div style={{"height":"15vw"}}></div>
           <Footer style={{"max-height":"6vw"}}/>
        </>
    )
}
