import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Modal } from "reactstrap";

//make category.id # a prop so the # of components can be divided by 5
function BorrowedChildByCategory({ catNumber }) {

    const [categories, setCategories] = useState([]);
    const [categoryDataFalse, setCategoryDataFalse] = useState(false);
    const [toolModal, setToolModal] = useState(false);
    const [toolModalData, setToolModalData] = useState(null);
    const [modalReady, setModalReady] = useState(false);
    const [counterB,setCounterB]=useState(0);

  function LoadBorrowableTools() {
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

  useEffect(() => {
    LoadBorrowableTools();
    if (!toolModalData === false) {
      setModalReady(true);
    }
  }, [toolModalData]);


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (ToolsBorrowed() == null) return setCategoryDataFalse(true);
      
  //     console.log("FAILED");
  //     console.log("categoryDataFalse "+categoryDataFalse);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  const NoBorrowableTools = () => {
    return (
      <h3>
        All MY Tools originate from this ToolShed &there4; Never Borrowed
      </h3>
    );
  };
  // const DefaultNotBorrowed = () => {
  //   if (ToolsBorrowed() == null) return NoBorrowableTools();
  //   return null;
  // };

 

//STILL NEED TO FIX DISPLAY of NoBorrowableTools component when no tools are in category array
  //working code that is similar to ToolShedByCategory
  const ToolsBorrowed = () =>{

    return(
      
    categories.length ? (
      <ul key={categories.name}>
        
        {
        categories.map((category) => {
         
          if (category.id === catNumber) {
            if (category.tools.length) {
              // console.log("category.tools.length "+ category.tools.length)
              //   setCategoryDataFalse(false);
           
              return (
                <div key={category.id} className="toolDetail">
                  <ul key={category.id} className="">
                    <div className="">
                      <br />
                      {category.tools.map((tool,index) => {
                  // console.log("counterB = " +counterB);
                        if (tool.borrowed){
                         setCounterB(Math.max(index+1));
                         console.log(("Math.max(index+1) = "+ Math.max(index+1) + ", counterB = " + counterB ));
                        return (
                     
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
                      }
                      return null
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
                            <div><span>Date Added to ToolShed:</span> {new Date(`${toolModalData.createdAt}`).toLocaleDateString()}</div>
                            </div>
                          </div>
                        </Modal>
                      )}
                    </div>
                  </ul>
                </div>
              );
            } else {
              return setCategoryDataFalse(true);;
            }
          }
          return null;
        })}
      </ul>
    // ) : <h3>All Tools Belong To You! &there4; Available</h3>}
  ) : null)};

 


 
    return (

    <>
           {!categoryDataFalse && <ToolsBorrowed />}
      {categoryDataFalse && <NoBorrowableTools />}
      {console.log("counterB "+counterB)}
      {/* {counterB && <ToolsBorrowed />}
      {!counterB && <NoBorrowableTools />}
      {console.log("counterB "+counterB)} */}
    </>
  );
 

}
export default BorrowedChildByCategory;

//-------TEST-----------------------------------
//semi-working code using filter method (code breaks after tool modal closes)

  // const LoadBorrowableTools = async () => {
  //   const first = await api.getCategories();
  //   const res = await first.data[catNumber-1].tools;
  //   setCategories(res);
  // };

  // const NoBorrowableTools = () => {
  //   return (
  //     <h3>
  //       All these Tools originate from this ToolShed &there4; Never Borrowed
  //     </h3>
  //   );
  // };

  // const ToolsBorrowed = () =>
  //   categories
  //     .filter((row) => {
  //       if (row.borrowed === true) {
  //         return row;
  //       } else {
  //         return null;
  //       }
  //     })
  //     .map((tool) => {
  //       return (
    
  //         <div className="toolDetail">
  //           <ul className="">
  //             <div className="">
               

  //               <div>
  //                 <li
  //                   key={tool.id}
  //                   className="glowClass"
  //                   onClick={() => {
  //                     setToolModalData(tool);
  //                     setToolModal(true);
  //                   }}
  //                 >
  //                   {""}
  //                   {tool.name}
  //                 </li>
                 
  //               </div>

  //               {modalReady && (
  //                 <Modal
  //                   className="toolInfoModal"
  //                   modalClassName="modal-black"
  //                   isOpen={toolModal}
  //                   toggle={() => setToolModal(false)}
  //                 >
  //                   <div className="modal-header justify-content-center">
  //                     <button
  //                       className="close"
  //                       onClick={() => setToolModal(false)}
  //                     >
  //                       <i className="tim-icons icon-simple-remove text-white" />
  //                     </button>
  //                     <div className="text-muted text-center ml-auto mr-auto ">
  //                       <h2>
  //                         <span>Tool Info</span>
  //                       </h2>
  //                       <h5 className="mb-0">{toolModalData.name}</h5>
  //                       <div>
  //                         <span>Description:</span> {toolModalData.description}
  //                       </div>
  //                       <div>
  //                         <span>Price:</span> ${toolModalData.price}
  //                       </div>
  //                       <div>
  //                         <span>Size(Length):</span> {sizeCondStatement()}
  //                       </div>

  //                       <br />

  //                       <div>
  //                         <span>In the ToolShed:</span>{" "}
  //                         {toolModalData.available.toString()}
  //                       </div>
  //                       <div>
  //                         <span>Borrowed In:</span>{" "}
  //                         {toolModalData.borrowed.toString()}
  //                       </div>

  //                       <div>
  //                         <span>Date Added to ToolShed:</span>{" "}
  //                         {new Date(
  //                           `${toolModalData.createdAt}`
  //                         ).toLocaleDateString()}
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </Modal>
  //               )}
  //             </div>
  //           </ul>
  //         </div>
  //       );
  //     });
 
  //   }
    
//   const DefaultNotBorrowed = () => {
//     if (ToolsBorrowed() == "") return NoBorrowableTools();
//     return null;
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCategoryDataTrue(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <ToolsBorrowed />
//       {categoryDataTrue && <DefaultNotBorrowed />}
//     </>
//   );
// }

// export default BorrowedChildByCategory;
