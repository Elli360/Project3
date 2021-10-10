import React,{ useState } from "react";
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

import  "./style.css";

export default function SearchBtnHome() {
    const [formModalSearch, setFormModalSearch] = useState(false);

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
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
                color="success" id="tooltip121" onClick={() => setFormModalSearch(true)}>
                <i className="tim-icons icon-zoom-split" />
            </Button>
            <UncontrolledTooltip placement="right" target="tooltip121">
                Dig through the ToolShed
            </UncontrolledTooltip>

            {/* Start Search Form Modal */}
            <Modal
                modalClassName="modal-black"
                isOpen={formModalSearch}
                toggle={() => setFormModalSearch(false)}
            >
                <div className="modal-header justify-content-center">
                    <button className="close" onClick={() => setFormModalSearch(false)}>
                        <i className="tim-icons icon-simple-remove text-white" />
                    </button>
                    <div className="text-muted text-center ml-auto mr-auto">
                        <h3 className="mb-0">Search Through Your Tool Shed</h3>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="btn-wrapper text-center">

                    </div>
                    <div className="text-center text-muted mb-4 mt-3">
                        <small>Describe what you are looking for in this directory</small>
                    </div>
                    <Form role="addForm">
                        <FormGroup className="mb-3">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="form-addon">
                                        Name:
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
                                        Category:
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Tool Category"
                                    type="text"
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
                                    placeholder="Tool Description"
                                    type="text"
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
                                    placeholder="Tool Price"
                                    type="text"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Loaned To:
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="User Name"
                                    type="text"
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
                                    type="text"
                                />
                            </InputGroup>
                        </FormGroup>


                        <div className="text-center">
                            <Button className="my-4" color="primary" type="button">
                                Search TOOL
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
            {/* End Search Form Modal */}

            
                    {/* Start Search Form Modal */}
                    {/* <Modal
                      modalClassName="modal-black"
                      isOpen={formModalSearch}
                      toggle={() => setFormModalSearch(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <button className="close" onClick={() => setFormModalSearch(false)}>
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
                    {/*  <form>
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
                    {/* </div>


                      </div>
                    </Modal> */}
                    {/* End Search Form Modal */}
        </>

    )
}