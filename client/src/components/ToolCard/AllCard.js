import React , { useEffect, useState } from "react";
import API from "../../utils/toolshed-api";
import DeleteBtn from "../DeleteBtn";

import { List, ListItem } from "../List";

function AllCard () {

  const [tools,setTools]=useState([]);

  useEffect(()=>{
    loadTools()
  },[])
  

  function loadTools(){
    API.getTools().then(res=>setTools(res.data)).catch(err=>console.log(err))
  };
  


  console.log(tools);

    return (
                      <div>
                                
                      <h2>All world !</h2>
                      

                        {tools.length ? (
                  <ul>
                    {tools.length ? (
                  <List>
                    {tools.map(tool => {
                      return (
                        <ListItem key={tool.id}>
                          <a href={"/tools/" + tool.id}>
                            <strong>
                            {tool.name}
                            </strong>
                          </a>
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


export default AllCard;
