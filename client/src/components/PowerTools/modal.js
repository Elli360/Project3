import React, { useEffect, useState } from "react";
import { Button, Modal } from "reactstrap";

function ToolInfoModal({toolObject, toolModalOpen , toolModalClose}) {
 

  return (
    <Modal
      className="toolInfoModal"
      modalClassName="modal-black"
      isOpen={toolModalOpen}
      toggle={() => toolModalClose()}
    >
      <div className="modal-header justify-content-center">
         <button className="close" onClick={() => toolModalClose()}>
          <i className="tim-icons icon-simple-remove text-white" />
        </button>
        {/* <button className="close" onClick={() => setToolModal(false)}>
          <i className="tim-icons icon-simple-remove text-white" />
        </button> */}
        <div className="text-muted text-center ml-auto mr-auto ">
          <h2>
            <span>Tool Info</span>
          </h2>
          <h5 className="mb-0">{toolObject.name}</h5>
          <div>
            <span>Description:</span> {toolObject.description}
          </div>
          <div>
            <span>Price:</span> ${toolObject.price}
          </div>

          <br />

          <div>
            <span>In the ToolShed:</span> {toolObject.available.toString()}
          </div>
          <div>
            <span>Borrowed In:</span> {toolObject.borrowed.toString()}
          </div>

          {/* first add different timestamp query then try to alter useState type */}
          {/* <div><span>Added Time:</span> {console.log(toolObject)}</div>
                                <div>TIME0: {toolObject.createdAt.toString()}</div>
                                <div><span>TIME1:</span> {new Date(`${toolObjectCreatedAt}`).toLocaleString()}</div>
                                <div><span>TIME2:</span> {new Date(toolObject.createdAt.seconds * 1000).toLocaleDateString("en-US")}</div>
                                <div><span>TIME3:</span> {new Date(`${toolObject.createdAt}`).toLocaleDateString()}</div> */}
        </div>
      </div>
    </Modal>
  );
}
export default ToolInfoModal;
