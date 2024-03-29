import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Button, Modal } from "reactstrap";

//make category.id # a prop so the # of components can be divided by 5
function BorrowedChildByCategory({ catNumber }) {
  const [categories, setCategories] = useState([]);
  const [categoryDataTrue, setCategoryDataTrue] = useState(false);
  const [toolModal, setToolModal] = useState(false);
  const [toolModalData, setToolModalData] = useState(null);
  const [modalReady, setModalReady] = useState(false);

  const LoadBorrowableTools = async () => {
    const first = await api.getCategories();
    const res = await first.data[catNumber].tools;
    setCategories(res);
  };

  const sizeCondStatement = () => {
    if (toolModalData.size == null) {
      return "Null";
    } else {
      return `${toolModalData.size} inches`;
    }
  };

  useEffect(() => {
    LoadBorrowableTools();
    if (!toolModalData === false) {
      setModalReady(true);
    }
  }, [toolModalData]);

  const NoBorrowableTools = () => {
    return (
      <h3>
        All these Tools originate from this ToolShed &there4; Never Borrowed
      </h3>
    );
  };

  const ToolsBorrowed = () =>
    categories
      .filter((row) => {
        if (row.borrowed === true) {
          return row;
        } else {
          return null;
        }
      })
      .map((tool) => {
        return (
    
          <div className="toolDetail">
            <ul className="">
              <div className="">
               

                <div>
                  <li
                    key={tool.id}
                    className="glowClass"
                    onClick={() => {
                      setToolModalData(tool);
                      setToolModal(true);
                    }}
                  >
                    {""}
                    {tool.name}
                  </li>
                 
                </div>

                {modalReady && (
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
                          <span>Description:</span> {toolModalData.description}
                        </div>
                        <div>
                          <span>Price:</span> ${toolModalData.price}
                        </div>
                        <div>
                          <span>Size(Length):</span> {sizeCondStatement()}
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
      });
 

  const DefaultNotBorrowed = () => {
    if (ToolsBorrowed() == "") return NoBorrowableTools();
    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCategoryDataTrue(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToolsBorrowed />
      {categoryDataTrue && <DefaultNotBorrowed />}
    </>
  );
}

export default BorrowedChildByCategory;
