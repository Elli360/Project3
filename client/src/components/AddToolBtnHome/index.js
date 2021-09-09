import api from 'utils/api';
import React, { useEffect, useState } from "react";
import { Inputs, FormBtn } from "../Form";
// import { Inputs, TextArea, FormBtn } from "../Form";
// import { List, ListItem } from "../List";
import {
  Button,
  UncontrolledTooltip,
  Modal,

} from "reactstrap";
import "./style.css";

export default function UpdateTool({ tool, handleAvailableChange }) {

  const [formModal, setFormModal] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  //==============================================
  // const [tools, setTools] = useState("");
  const [tools, setTools] = useState("");

  function loadTools() {
    api.getCategories().then(res => setTools(res.data)).catch(err => console.log(err))
  };

  useEffect(() => {
    loadTools()
  })
  // }, [])

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.categoryId) {
      api.saveTool({
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
          price: 0,
          categoryId: 0
          // price: "",
          // available:null
        }))
        .then(() => loadTools())
        .catch(err => console.log(err));
    }
    setFormModal(false);
  };

  const [formObject, setFormObject] = useState({
    name: "",
    description: "",
    price: [],
    categoryId: []
  });

  return (
    <>
      <Button
        className="btn-icon btn-simple btn-round btn-neutral"
        color="success" id="tooltip10" onClick={() => setFormModal(true)}>
        <i className="tim-icons icon-simple-add" />
      </Button>
      <UncontrolledTooltip delay={0} placement="left" target="tooltip10">
        Add to ToolShed
      </UncontrolledTooltip>


      {/* ======================================================================== */}
      {/* Start Add Form Modal */}
      <Modal
        modalClassName="modal-black"
        isOpen={formModal}
        toggle={() => setFormModal(false)}
      >
        <div className="modal-header justify-content-center">
          <button className="close" onClick={() => setFormModal(false)}>
            <i className="tim-icons icon-simple-remove text-white" />
          </button>
          <div className="text-muted text-center ml-auto mr-auto">
            <h3 className="mb-0">Add to Your ToolShed</h3>
          </div>
        </div>
        <div className="modal-body">
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
              placeholder="price (required)"
              value={formObject.price}
            />


            {/* drop down list */}
            <label>
              Tool Category:
              <select value={formObject.categoryId} name="categoryId" onChange={handleInputChange}>
                <option value={1}>Power Tools</option>
                <option value={2}>Handtools</option>
                <option value={3}>Outdoor</option>
                <option value={4}>Workshop tools</option>
                <option value={5}>Hardware</option>

              </select>
            </label>


            {/* <Inputs
                onChange={handleInputChange}
                name="categoryId"
                placeholder="Category Id (Mandatory)"
                value={formObject.categoryId}
              /> */}



            <FormBtn
              disabled={!(formObject.name && formObject.description && formObject.price && formObject.categoryId)}
              onClick={handleFormSubmit}
            >
              Submit Tool
            </FormBtn>
          </form>
          {/* ======================================= */}
        </div>
      </Modal>
      {/* End Add Form Modal */}
      {/* =================================================================== */}


    </>
  )
}