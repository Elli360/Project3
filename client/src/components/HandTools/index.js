import React, { useEffect, useState } from "react";
import api from "../../utils/api";


function HandTools() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadTools()
  }, [])

  function loadTools() {
    api.getCategories().then(res => setCategories(res.data)).catch(err => console.log(err))
  };
  
  return (
    <>
      {categories.length ? (
        <ul>
          {categories.map(category => {
            if (category.id === 2) {
              if (category.tools.length) {
                return (
                  <div key={category.id}>
                    <ul>
                      <div className="toolDetail" >
                        {category.tools.map(tool => {
                          return (
                            <li key={tool.id}>{tool.name}</li>
                          )
                        })
                        }
                      </div>
                    </ul>
                  </div>
                );
              }
              else {
                return <h3>No Tools were found.</h3>
              }
            }
            return null
          }
          )}
        </ul>
      ) : (
        null
      )}
    </>
  )
}
export default HandTools;


