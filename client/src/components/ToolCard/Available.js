import React, { useEffect, useState } from "react";
import api from "../../utils/api";
// import DeleteBtn from "../DeleteBtn";

import { List, ListItem } from "../List";

function Available() {

  const [tools, setTools] = useState([]);

  useEffect(() => {
    loadTools()
  }, [])


  function loadTools() {
    api.getTools().then(res => setTools(res.data)).catch(err => console.log(err))
  };



  // console.log(tools);

  return (
    <div>

      <h2>Currently available tools...</h2>
      <hr></hr>


      {tools.length ? (
        <ul>
          {tools.length ? (
            <List>
              {tools.map(tool => {
                if (tool.available === true) {
                  return (
                    <ListItem key={tool.id}>
                      <a href={"/tools/" + tool.id}>
                        <strong>
                          {tool.name}
                        </strong>
                      </a>
                    </ListItem>
                  );
                }
                else {
                  return null
                }
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


export default Available;
