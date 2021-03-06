import React , { useEffect, useState } from "react";
import api from "../../../utils/api";
import DeleteBtn from "../../DeleteBtn";
import { Inputs, TextArea, FormBtn } from "../../Form";
import { List, ListItem } from "../../List";
import UpdateTool from '../../UpdateTool';

function UpdateCard () {

  const [tools,setTools]=useState("");

  useEffect(()=>{
    loadTools()
  },[])
  

  function loadTools(){
    api.getTools().then(res=>setTools(res.data)).catch(err=>console.log(err))
  };
  

  function handleFormSubmit(event) {
    event.preventDefault();
      api.updateTool({
        // name: formObject.name,
        // description: formObject.description,
        // categoryId: formObject.categoryId,
        // price: formObject.price,
        available:formObject.available
        // price: formObject.price,
        // available:formObject.available
      })
        .then(() => setFormObject({
          // name: "",
          // description: "",
          // price:0,
          // categoryId: 0,
          // price: "",
          available:""
          }))
        .then(() => loadTools())
        .catch(err => console.log(err));
        
  };

  const [formObject, setFormObject] = useState({
    // name:"",
    // description:"",
    // price:[],
    // categoryId: 0,
    available:true
  });


    // Handles updating component state when the user types into the input field
    function handleInputChange(id, available) {
      // event.preventDefault();
      // const { name, value } = event.target;
      // setFormObject({...formObject, [name]: value})
      api.updateTool(id,{available})
      .then(res => loadTools())
      .catch(err => console.log(err));

    };
  
//================================deleting
  // Deletes a tool from the database with a given id, then reloads books from the db
  function updateTool(id) {
    api.updateTool(id)
      .then(res => loadTools())
      .catch(err => console.log(err));
  }




  console.log(tools);

    return (
                      <div>
                                
                      <h2>Sign a tool out...</h2>
                      <hr></hr>
                      

                        {tools.length ? (
                  <ul>
                    {tools.length ? (
                  <List>
                    {tools.map(tool => {
                      return (
                        <UpdateTool key={tool.id}
                        handleAvailChange={handleInputChange}
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
