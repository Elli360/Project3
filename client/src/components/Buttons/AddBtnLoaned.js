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

export default function AddBtnLoaned() {
    
    const [formModal, setFormModal] = useState(false);

    return (
        <>
              <Button
                              className="btn-icon btn-simple btn-round btn-neutral"
                              color="success" id="tooltip21" onClick={() => setFormModal(true)}>
                              <i className="tim-icons icon-zoom-split" />
                            </Button>
                            <UncontrolledTooltip delay={0} placement="right" target="tooltip21">
                              Search Loaned Tools
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
                                  <h3 className="mb-0">Search Your Loaned Tools</h3>
                                </div>
                              </div>
                              <div className="modal-body">
                                <div className="btn-wrapper text-center">

                                </div>
                                <div className="text-center text-muted mb-4 mt-3">
                                  <small>Describe what you are looking for in this directory</small>
                                </div>
                                <Form role="searchForm">
                                  <FormGroup className="mb-3">
                                    <InputGroup>
                                      <InputGroup addonType="prepend">
                                        <InputGroupText>
                                          Name:
                                        </InputGroupText>
                                      </InputGroup>
                                      <Input
                                        placeholder="Tool Name"
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
                                          Loaned To:
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
                                      Search TOOL
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </Modal>
                            {/* End Search Form Modal */}
            
        </>
    );
}