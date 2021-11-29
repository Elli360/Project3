import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Button, Modal } from "reactstrap";

function PowerTools() {
  const [categories, setCategories] = useState([]);
  const [toolModal, setToolModal] = useState(false);
  useEffect(() => {
    loadTools();
  }, []);

  function loadTools() {
    api
      .getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
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
                              <Button onClick={() => setToolModal(true)}>
                                {" "}
                                {tool.name}
                              </Button>
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
                                    <h3 className="mb-0">Tool Info</h3>
                                  </div>
                                </div>
                              </Modal>
                            </li>
                          );
                        })}
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
