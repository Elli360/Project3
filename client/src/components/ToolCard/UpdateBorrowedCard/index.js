import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
// import * as api  from '../../../utils/api.js';
// import DeleteBtn from "../../DeleteBtn";
// import { Inputs, TextArea, FormBtn } from "../../Form";
// import { List, ListItem } from "../../List";
import { List } from "../../List";
import UpdateBorrowedTool from "../../UpdateBorrowedTool";
import "./style.css";

function UpdateBorrowedCard() {
  const [tools, setTools] = useState("");
  const [allCheckbox, setAllCheckbox] = useState([true, false]);
  useEffect(() => {
    loadTools();
  }, [])

  function loadTools() {
    api.getTools().then(res => setTools(res.data)).catch(err => console.log(err))
  };
  

  //changes tool availability array individually
  function handleInputChange(id, borrowed) {
    // event.preventDefault();
    // const { name, value } = event.target;
    // setFormObject({...formObject, [name]: value})
    api.updateTool(id, { borrowed })
      .then(() => loadTools())
      .catch(err => console.log(err));
  };

  //changes tool availability array in unison
  function handleAllChange(event) {
    setAllCheckbox(event.target.checked);

    if(!event.target.checked){
    function handleAllInputChange(borrowed) {
      // const toolLength = tools.length + 2;
      // console.log(`Tool length: ${toolLength}`);
      for (let allId = 0; allId < tools.length + 2; allId++) {
        api.updateTool(allId, { borrowed })
          .then(() => loadTools())
          .catch(err => console.log(err));
      }
    };
    handleAllInputChange(false);
  }else if(event.target.checked){
    function handleAllInputChange(borrowed) {
      // const toolLength = tools.length + 2;
      // console.log(`Tool length: ${toolLength}`);
      for (let allId = 0; allId < tools.length + 2; allId++) {
        api.updateTool(allId, { borrowed })
          .then(() => loadTools())
          .catch(err => console.log(err));
      }
    };
    handleAllInputChange(true);
  }
}

  return (
    <div>

      <h1>Designate a tool as being borrowed</h1>
      <hr></hr>
      <h3 className="allToolsCheckbox">
         Change Borrowed property of ALL tools: <span className="allCheckbox">{allCheckbox.toString()}</span> 
        <input type="checkbox"
          onChange={handleAllChange}
          // defaultChecked={allCheckbox}
          checked={allCheckbox}  
        />
      </h3>
      {tools.length ? (
        <ul>
          {tools.length ? (
            <List>
              {tools.map(tool => {
                return (
                  <UpdateBorrowedTool key={tool.id}
                    handleBorrowedChange={handleInputChange}
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


export default UpdateBorrowedCard;