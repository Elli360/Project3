import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
// import * as api  from '../../../utils/api.js';
// import DeleteBtn from "../../DeleteBtn";
// import { Inputs, TextArea, FormBtn } from "../../Form";
// import { List, ListItem } from "../../List";
import { List } from "../../List";
import UpdateTool from '../../UpdateTool';

function UpdateCard() {

  const [tools, setTools] = useState("");
  const [allCheckbox, setAllCheckbox] = useState("");
  const [checkMark, setCheckMark] = useState(false);
  const [checkMarkz, setCheckMarkz] = useState(false);
  useEffect(() => {
    loadTools();
  }, [])

  // useEffect(() => {

  //   loadForAllTools();
  //   // setCheckMark();
  // }, [])
  function loadTools() {
    api.getTools().then(res => setTools(res.data)).catch(err => console.log(err))
  };
  function loadForAllTools() {
    api.getTools().then(res => setAllCheckbox(res.data[0].available)).catch(err => console.log(err))
  };
  useEffect(() => {

    loadForAllTools();
    // setCheckMark();
  }, [])

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //     api.updateTool({
  //       // name: formObject.name,
  //       // description: formObject.description,
  //       // categoryId: formObject.categoryId,
  //       // price: formObject.price,
  //       available:formObject.available
  //       // price: formObject.price,
  //       // available:formObject.available
  //     })
  //       .then(() => setFormObject({
  //         // name: "",
  //         // description: "",
  //         // price:0,
  //         // categoryId: 0,
  //         // price: "",
  //         available:""
  //         }))
  //       .then(() => loadTools())
  //       .catch(err => console.log(err));

  // };

  // const [formObject, setFormObject] = useState({
  //   // name:"",
  //   // description:"",
  //   // price:[],
  //   // categoryId: 0,
  //   available:true
  // });

  //changes tool availability array individually
  function handleInputChange(id, available) {
    // event.preventDefault();
    // const { name, value } = event.target;
    // setFormObject({...formObject, [name]: value})
    api.updateTool(id, { available })
      .then(() => loadTools())
      .catch(err => console.log(err));
  };

  //changes tool availability array in unison
  function handleAllChange(event) {
    // const checkMark = event.target.checked;
    // setCheckMark(event.target.checked);
    if(!event.target.checked){
    function handleAllInputChange(available) {
      for (let allId = 0; allId < tools.length; allId++) {
        // event.preventDefault();
        // const { name, value } = event.target;
        // setFormObject({...formObject, [name]: value})
        api.updateTool(allId, { available })
          .then(() => loadTools())
          .catch(err => console.log(err));
      }
    };
    handleAllInputChange(false);
  }else if(event.target.checked){
    function handleAllInputChange(available) {
      for (let allId = 0; allId < tools.length; allId++) {
        // event.preventDefault();
        // const { name, value } = event.target;
        // setFormObject({...formObject, [name]: value})
        api.updateTool(allId, { available })
          .then(() => loadTools())
          .catch(err => console.log(err));
      }
    };
    handleAllInputChange(true);
  }
// setCheckMarkz(checkMark);
setCheckMark(event.target.checked);
// setCheckMark(()=>(event)=>event.target.checked);
setCheckMarkz(checkMark);
  
}
  // const allCheckbox = tools[0].available;
  console.log(`This is not tools: ${allCheckbox}`);

  return (
    <div>

      <h2>Sign a tool out...</h2>
      <hr></hr>
      {/* {tools.length ? (<h3>
        Change Availability of ALL tools: {allCheckbox.toString()}
        <input type="checkbox"
          onChange={handleAllChange}
          defaultChecked={allCheckbox}
        />
      </h3>) : (<h3>No Toolz</h3>)
      }; */}

      <h3 className="allToolsCheckbox">
        Change Availability of ALL tools: {allCheckbox.toString()}
        <input type="checkbox"
          onChange={handleAllChange}
          defaultChecked={allCheckbox}
        />
      </h3>
      {tools.length ? (
        <ul>
          {tools.length ? (
            <List>
              {tools.map(tool => {
                return (
                  <UpdateTool key={tool.id}
                    handleAvailableChange={handleInputChange}
                    tool={tool}
                  />
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}

        </ul>
      ) : (
        <h3>No Tools were found.</h3>
      )}

    </div>

  )
}


export default UpdateCard;
