import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function Welcome() {
    return (
        <>
           <CustomNavbar /> 
           <div style={{"height":"15vw"}}></div>
           <div style={{"font-size":"15vw"}}>
               Welcome!
               </div>
               <div style={{"height":"15vw"}}></div>
           <Footer style={{"max-height":"6vw"}}/>
        </>
    )
}
