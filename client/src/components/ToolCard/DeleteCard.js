import React , { useEffect, useState } from "react";
import api from "../../utils/api";
import DeleteBtn from "../../components/DeleteBtn";

import { List, ListItem } from "../../components/List";

function DeleteCard () {

  const [tools,setTools]=useState([]);

  useEffect(()=>{
    loadTools()
  },[])
  

  function loadTools(){
    api.getTools().then(res=>setTools(res.data)).catch(err=>console.log(err))
  };
  
//================================deleting
  // Deletes a tool from the database with a given id, then reloads books from the db
  function deleteTool(id) {
    api.deleteTool(id)
      .then(res => loadTools())
      .catch(err => console.log(err));
  }



  console.log(tools);

    return (
                      <div>
                                
                      <h2>Remove a tool from the inventory...</h2>
                      <hr></hr>
                      

                        {tools.length ? (
                  <ul>
                    {tools.length ? (
                  <List>
                    {tools.map(tool => {
                      return (
                        <ListItem key={tool.id}>
                          <a href={"/tools/" + tool.id}>
                            <strong>
                              ID:{tool.id} Name: {tool.name}
                            </strong>
                          </a>
                          <DeleteBtn onClick={() => deleteTool(tool.id)} />
                        </ListItem>
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


export default DeleteCard;
