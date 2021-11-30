import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Button, Modal } from "reactstrap";

function PowerTools() {
  const [categories, setCategories] = useState([]);
  const [toolModal, setToolModal] = useState(false);
  const [toolModalData, setToolModalData] = useState(null);
  const [modalReady, setModalReady] = useState(false);

  useEffect(() => {
    loadTools();
  }, []);

  function loadTools() {
    api
      .getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }
const ModalReadyFunc = () => {
  if(!toolModalData === false){
    setModalReady(true);
  }
  // else{
  //   return(
  //     <Modal>Unfinished Business</Modal>
  //   )
  // }
  console.log(`ModalReadyFunc true`);
}

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
                              <Button onClick={() =>{
                                ModalReadyFunc(); 
                                setToolModalData(tool);
                                setToolModal(true);
                              }}>
                                {" "}
                                {tool.name}
                              </Button>
                            </li>
                          );
                        })}
                      {console.log(`modalReady:${modalReady}`)}
                      {console.log(`toolModalData:${toolModalData}`)}

                        {modalReady &&
                               <Modal
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
                                  <div className="text-muted text-center ml-auto mr-auto">
                                    <h3 className="mb-0">{toolModalData.name}</h3>
                                    <div>{toolModalData.description}</div>
                                    <div>{toolModalData.price}</div>
                                  </div>
                                </div>
                              </Modal>}
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
