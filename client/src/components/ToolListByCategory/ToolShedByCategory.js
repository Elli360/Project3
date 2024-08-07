import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Modal } from "reactstrap";
//import ToolModalInfo from "../PowerTools/modal.js";
function ToolShedByCat({ catNumber }) {
  const [categories, setCategories] = useState([]);
  const [toolModal, setToolModal] = useState(false);
  const [toolModalData, setToolModalData] = useState(null);
  // const [toolModalDataCreatedAt, setToolModalDataCreatedAt] = useState(null);
  // const [toolModalData, setToolModalData] = useState([] | false | 5 | null);
  // const [toolToString, setToolToString] = useState(null);
  const [modalReady, setModalReady] = useState(false);

  useEffect(() => {
    loadTools();
    if (!toolModalData === false) {
      setModalReady(true);
    }
    // modalReturn();
    // return()=>{
    //   setToolModal();
    // }
  }, [toolModalData]);
  // const modalReturn=()=>{
  //   setToolModal(true);
  // }
  function loadTools() {
    api
      .getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }

  const sizeCondStatement = () => {
    if (toolModalData.size == null) {
      return "Null";
    } else {
      return `${toolModalData.size} inches`;
    }
  };
  return (
    <>
      {categories.length ? (
        <ul>
          {categories.map((category) => {
            if (category.id === catNumber) {
              if (category.tools.length) {
                return (
                  <div key={category.id} className="toolDetail">
                    <ul className="">
                      <div className="">
                        <br />
                        {category.tools.map((tool) => {
                          // console.log(tool);
                          return (
                            // <li className="glow-on-hover" key={tool.id}>
                            // <Button
                            //     onClick={() => {
                            //       setToolModalData(tool);
                            //       setToolModal(true);
                            //     }}
                            //   >
                            //     {" "}
                            //     {tool.name}
                            //   </Button>
                            // </li>
                            <div>
                              <li
                                key={tool.id}
                                className="glowClass"
                                onClick={() => {
                                  setToolModalData(tool);
                                  setToolModal(true);
                                  // modalReturn();
                                }}
                              >
                                {" "}
                                {tool.name}
                              </li>
                              <br />
                            </div>
                          );
                        })}
                        {modalReady && (
                          //  <ToolModalInfo toolModalOpen={toolModal} toolModalClose={()=>setToolModal(false)} toolObject={toolModalData}/>
                          <Modal
                            className="toolInfoModal"
                            modalClassName="modal-black"
                            isOpen={toolModal}
                            toggle={() => setToolModal(false)}
                          >
                            <div className="modal-header justify-content-center">
                              <button
                                className="close"
                                onClick={() => setToolModal(false)}
                              >
                                <i className="tim-icons icon-simple-remove text-white" />
                              </button>
                              <div className="text-muted text-center ml-auto mr-auto ">
                                <h2>
                                  <span>Tool Info</span>
                                </h2>
                                <h5 className="mb-0">{toolModalData.name}</h5>
                                <div>
                                  <span>Description:</span>{" "}
                                  {toolModalData.description}
                                </div>
                                <div>
                                  <span>Price:</span> ${toolModalData.price}
                                </div>
                                <div>
                                  <span>Size(Length):</span>{" "}
                                  {sizeCondStatement()}
                                </div>

                                <br />

                                <div>
                                  <span>In the ToolShed:</span>{" "}
                                  {toolModalData.available.toString()}
                                </div>
                                <div>
                                  <span>Borrowed In:</span>{" "}
                                  {toolModalData.borrowed.toString()}
                                </div>

                                {/* first add different timestamp query then try to alter useState type */}
                                {/* <div><span>Added Time:</span> {console.log(toolModalData)}</div>
                                <div>TIME0: {toolModalData.createdAt.toString()}</div>
                                <div><span>TIME1:</span> {new Date(`${toolModalDataCreatedAt}`).toLocaleString()}</div>
                                <div><span>TIME2:</span> {new Date(toolModalData.createdAt.seconds * 1000).toLocaleDateString("en-US")}</div> */}
                                <div>
                                  <span>Date Added to ToolShed:</span>{" "}
                                  {new Date(
                                    `${toolModalData.createdAt}`
                                  ).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </Modal>
                        )}
                      </div>
                    </ul>
                  </div>
                );
              } else {
                // return <he>No Tools in the ToolShed</he>
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
export default ToolShedByCat;
