import { Line } from "react-chartjs-2";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";


// reactstrap components

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import ToolCard from "components/ToolCard/Toolcard.js"

import bigChartData from "variables/charts.js";

// ====================== post import
// import {Inputs, FormBtn } from "../Form";
import API from '../../utils/toolshed-api';
import React , { useEffect, useState } from "react";


import { Inputs, FormBtn } from "../Form";


function PostModal(props){

    // const [formModal, setFormModal] = React.useState(false);
    // React.useEffect(() => {
    //   document.body.classList.toggle("landing-page");
    //   // Specify how to clean up after this effect:
    //   return function cleanup() {
    //     document.body.classList.toggle("landing-page");
    //   };
    // }, []);
  
  // ==============================================
  

  
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.name && formObject.categoryId) {
        API.saveTool({
          name: formObject.name,
          description: formObject.description,
          categoryId: formObject.categoryId,
          price: formObject.price
          // price: formObject.price,
          // available:formObject.available
        })
          .then(() => setFormObject({
            name: "",
            description: "",
            price:0,
            categoryId: 0
            // price: "",
            // available:null
            }))
          .then(() => props.loadtools)
          // .then(()=>(prop.falseModal))
          .catch(err => console.log(err));
          }  
    };
  
    const [formObject, setFormObject] = useState({
      name:"",
      description:"",
      price:[],
      categoryId: []
    });
  

    return(
        // <div className="btn-wrapper">
        <div className="button-container">

  

         
          {/* Start Search Form Modal */}
          <div className="modal-header justify-content-center">
                        <button className="close">
                          <i className="tim-icons icon-simple-remove text-white" />
                        </button>
                        <div className="text-muted text-center ml-auto mr-auto">
                          <h3 className="mb-0">Add to the ToolShed</h3>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="btn-wrapper text-center">

                        </div>
                        <div className="text-center text-muted mb-4 mt-3">
                          <small>Describe what you are looking for in your ToolShed</small>
                        </div>
                        <div>
          {/* ====== mod==================================*/}
          <form>
                        <Inputs
                          onChange={handleInputChange}
                          name="name"
                          placeholder="name (required)"
                          value={formObject.name}
                        />
                        <Inputs
                          onChange={handleInputChange}
                          name="description"
                          placeholder="description (required)"
                          value={formObject.description}
                        />
                        <Inputs
                          onChange={handleInputChange}
                          name="price"
                          placeholder="price (Optional)"
                          value={formObject.price}
                        />
                        <Inputs
                          onChange={handleInputChange}
                          name="categoryId"
                          placeholder="id (Mandatory)"
                          value={formObject.categoryId}
                        />

                        <FormBtn
                          disabled={!(formObject.name && formObject.categoryId)}
                          onClick={handleFormSubmit}
                        >
                          Submit Tool
                        </FormBtn>
                      </form>
              {/* ======================================= */}
                      </div>


                        </div>

          
          {/* End Search Form Modal */}
        </div>

    )
}

export default PostModal;