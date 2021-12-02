import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Button, Modal } from "reactstrap";

function PowerTools() {
  const [categories, setCategories] = useState([]);
  const [toolModal, setToolModal] = useState(false);
  const [toolModalData, setToolModalData] = useState(null);
  // const [toolModalData, setToolModalData] = useState([] | false | 5 | null);
  // const [toolToString, setToolToString] = useState(null);
  const [modalReady, setModalReady] = useState(false);

  useEffect(() => {
    loadTools();
    if (!toolModalData === false) {
      setModalReady(true);
    }
  }, [toolModalData]);

  function loadTools() {
    api
      .getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }


  // const dataFunction = () => {
  //   const toolModalDataColumn = () => {
  //     if (toolModal === true) {
  //       return toolModalData;
  //     }else return null
  //   };
  //   const fDot = ()=>{if(toolModalDataColumn===!null){return toolModalDataColumn.name.toString()}};
  //   setToolToString(fDot);
  //   return <div>{toolToString}</div>;
  // };

  return (
    <>
      {categories.length ? (
        <ul>
          {categories.map((category) => {
            if (category.id === 1) {
              if (category.tools.length) {
                return (
                  <div key={category.id}>
                    <ul>
                      <div className="toolDetail">
                        {category.tools.map((tool) => {
                          return (
                            <li key={tool.id}>
                              <Button
                                onClick={() => {
                                  setToolModalData(tool);
                                  setToolModal(true);
                                }}
                              >
                                {" "}
                                {tool.name}
                              </Button>
                            </li>
                          );
                        })}
                        {modalReady && (
                          <Modal
                            modalClassName="modal-black"
                            isOpen={toolModal}
                            toggle={() => setToolModal(false)}
                          >
                            <div className="modal-header justify-content-center toolInfoModal">
                              <button
                                className="close"
                                onClick={() => setToolModal(false)}
                              >
                                <i className="tim-icons icon-simple-remove text-white" />
                              </button>
                              <div className="text-muted text-center ml-auto mr-auto ">
                                <h2><span>Tool Info</span></h2>
                                <h5 className="mb-0">{toolModalData.name}</h5>
                                <div>
                                  <span>Description:</span> {toolModalData.description}
                                </div>
                                <div><span>Price:</span> ${toolModalData.price}</div>
                                {/* <div>------</div> */}
                                <br />
                                {/* <div>Loaned Out: {toolModalData.available.toString()}</div>
                                <div>Borrowed In: {toolModalData.borrowed.toString()}</div>
                                <div>Added Time: {toolModalData.createdAt.toString()}</div> */}
                                {/* <div>Loaned Out: {dataFunction()}</div> */}
                                <div><span>In the ToolShed:</span> {toolModalData.available.toString()}</div>
                                <div><span>Borrowed In:</span> {toolModalData.borrowed.toString()}</div>
                                <div><span>Added Time:</span> {toolModalData.createdAt}</div>
                              </div>
                            </div>
                          </Modal>
                        )}
                      </div>
                    </ul>
                  </div>
                );
              } else {
                return <h3>No Tools were found.</h3>;
              }
            }
            return null;
          })}
        </ul>
      ) : null}
    </>
  );
}
export default PowerTools;
