import React,{useState} from "react";
import {
    Button,
    Modal,
    Form,
    FormGroup,
    InputGroup,
    // InputGroup,
    InputGroupText,
    Input,
    UncontrolledTooltip,
} from "reactstrap";

export default function AddBtnBorrowed() {
    const [formModal, setFormModal] = useState(false);

    return (
        <>
            <Button
                className="btn-icon btn-simple btn-round btn-neutral"
                color="success" id="tooltip20" onClick={() => setFormModal(true)}>
                <i className="tim-icons icon-simple-add" />
            </Button>
            <UncontrolledTooltip delay={0} placement="right" target="tooltip20">
                Add Borrowed Tool TO Tool Directory
                        </UncontrolledTooltip>
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
                        <h3 className="mb-0">Add to Your Borrowed Tools</h3>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="btn-wrapper text-center">

                    </div>
                    <div className="text-center text-muted mb-4 mt-3">
                        <small>What are the details to this newly borrowed tool?</small>
                    </div>
                    <Form role="addForm">
                        <FormGroup className="mb-3">
                            <InputGroup>
                                <InputGroup addonType="prepend">
                                    <InputGroupText>
                                        Name:
                                    </InputGroupText>
                                </InputGroup>
                                <Input
                                    placeholder="Tool Name"
                                    aria-label="Tool Name"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup addonType="prepend">
                                    <InputGroupText>
                                        Category:
                                    </InputGroupText>
                                </InputGroup>
                                <Input
                                    placeholder="Tool Category"
                                    type="text"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup addonType="prepend">
                                    <InputGroupText>
                                        Description:
                                    </InputGroupText>
                                </InputGroup>
                                <Input
                                    placeholder="Tool Description"
                                    type="text"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup addonType="prepend">
                                    <InputGroupText>
                                        Price:
                                    </InputGroupText>
                                </InputGroup>
                                <Input
                                    placeholder="Tool Price"
                                    type="text"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup addonType="prepend">
                                    <InputGroupText>
                                        Borrowed From:
                                    </InputGroupText>
                                </InputGroup>
                                <Input
                                    placeholder="User Name"
                                    type="text"
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup addonType="prepend">
                                    <InputGroupText>
                                        Promise Date:
                                    </InputGroupText>
                                </InputGroup>
                                <Input
                                    placeholder="Expected Return Date"
                                    type="text"
                                />
                            </InputGroup>
                        </FormGroup>

                        <div className="text-center">
                            <Button className="my-4" color="primary" type="button">
                                ADD TOOL
                                </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
            {/* End Add Form Modal */}
        </>
    );
}