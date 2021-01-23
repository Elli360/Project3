
import React from "react";
import {
    Button,
    Modal,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    UncontrolledTooltip,
} from "reactstrap";


import API from 'utils/toolshed-api';

import { useState } from "react";

export default function AddBtnHome() {
    const [formModalAdd, setFormModalAdd] = React.useState(false);

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
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
                    price: 0,
                    categoryId: 0
                    // price: "",
                    // available:null
                }))
                .then(() => loadTools())
                .catch(err => console.log(err));
        }

    };

    const [setTools] = useState([]);


    function loadTools() {
        API.getCategories().then(res => setTools(res.data)).catch(err => console.log(err))
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
                color="success" id="tooltip10" onClick={() => setFormModalAdd(true)}>
                <i className="tim-icons icon-simple-add" />
            </Button>
            <UncontrolledTooltip delay={0} placement="left" target="tooltip10">
                Add to ToolShed
</UncontrolledTooltip>
            {/* Start Add Form Modal */}
            <Modal
                modalClassName="modal-black"
                isOpen={formModalAdd}
                toggle={() => setFormModalAdd(false)}
            >
                <div className="modal-header justify-content-center">
                    <button className="close" onClick={() => setFormModalAdd(false)}>
                        <i className="tim-icons icon-simple-remove text-white" />
                    </button>
                    <div className="text-muted text-center ml-auto mr-auto">
                        <h3 className="mb-0">Add to Your Loaned Tools</h3>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="btn-wrapper text-center">

                    </div>
                    <div className="text-center text-muted mb-4 mt-3">
                        <small>What are the details to this newly loaned tool?</small>
                    </div>
                    <Form role="addForm">
                        <FormGroup className="mb-3">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Name:
            </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    onChange={handleInputChange}
                                    name="name"
                                    placeholder="name (required)"
                                    value={formObject.name}
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Category:
            </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    onChange={handleInputChange}
                                    name="categoryId"
                                    placeholder="id (Mandatory)"
                                    value={formObject.categoryId}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Description:
            </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    onChange={handleInputChange}
                                    name="description"
                                    placeholder="description (required)"
                                    value={formObject.description}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Price:
            </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    onChange={handleInputChange}
                                    name="price"
                                    placeholder="price (Optional)"
                                    value={formObject.price}
                                />
                            </InputGroup>
                        </FormGroup>
                        {/* <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Loaned To:
            </InputGroupText>
          </InputGroupAddon>
          <Input
            onChange={handleInputChange}
            name="name"
            placeholder="name (required)"
            value={formObject.name}
          />
        </InputGroup>
      </FormGroup> 
       <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              Promise Date:
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Expected Return Date"
            onChange={handleInputChange}
        name="price"
        
        value={formObject.price}
          />
        </InputGroup>
      </FormGroup> */}

                        <div className="text-center">
                            <Button
                                className="my-4"
                                color="primary"
                                type="button"
                                disabled={!(formObject.name && formObject.categoryId)}
                                onClick={handleFormSubmit}
                            >
                                ADD TOOL
        </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
            {/* End Add Form Modal */}

            {/* ======================================================================== */}
            {/* Start Add Form Modal */}
            {/* <Modal
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
            {/* <form>
  <Inputs
    onChange={handleInputChange}
    name="title"
    placeholder="Title (required)"
    value={formObject.title}
  />
  <Inputs
    onChange={handleInputChange}
    name="author"
    placeholder="Author (required)"
    value={formObject.author}
  />
  <TextArea
    onChange={handleInputChange}
    name="synopsis"
    placeholder="Synopsis (Optional)"
    value={formObject.synopsis}
  />
  <FormBtn
    disabled={!(formObject.author && formObject.title)}
    onClick={handleFormSubmit}
  >
    Submit Tool
  </FormBtn>
</form>
{/* ======================================= */}
            {/* </div>
</Modal> */}
            {/* End Add Form Modal */}

        </>
    )
}