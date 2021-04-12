import React , { useEffect, useState } from "react";
import api from "../../utils/api";


function ToolCard ({categories}) {

// const [categories,setCategories]=useState([]);

// // useEffect(()=>{
// //     // loadTools()
// // },[])


// function loadTools(){
//   API.getCategories().then(res=>setCategories(res.data)).catch(err=>console.log(err))
// };

  console.log(categories);

    return (

                <div>
                 
                 <h2>Ok !</h2>
                  

                   {categories.length ? (
              <ul>
                {categories.map(category => {
                  return (
                    <div key={category.id}>
                      <a href={"/tools/" + category.id}>{category.name}</a>
                      
                      <ul>                     
                    
                      <div className="toolDetail" >
                      {category.tools.map(tool=>{
                        
                    
                        return(
                          
                        <li key= {tool.id}>{tool.name}</li>
                      
                      
                        )
                        
                      })
                      }
                      </div>
                      </ul>
                    </div> 
                   
                    );
                }
                
                )}
              </ul>
            ) : (
              <h3>None were found.</h3>
            )}
              
                </div>


            
       
    )
}

export default ToolCard;


