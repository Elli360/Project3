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

export default function SearchBtnBorrowed() {
    const [formModal, setFormModal] = React.useState(false);

    return (
        <>
            <Button
                className="btn-icon btn-simple btn-round btn-neutral"
                color="success" id="tooltip21" onClick={() => setFormModal(true)}>
                <i className="tim-icons icon-zoom-split" />
            </Button>
            <UncontrolledTooltip delay={0} placement="right" target="tooltip21">
                Search Borrowed Tools
                        </UncontrolledTooltip>
            {/* Start Search Form Modal */}
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
                        <h3 className="mb-0">Search Your Borrowed Tools</h3>
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
                                    <InputGroupText>
                                        Name:
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Tool Name"
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
                                        Borrowed From:
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
        </>
    )
}