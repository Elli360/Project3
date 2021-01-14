import React , { useEffect, useState } from "react";
import API from "../../utils/toolshed-api";


function ToolCard () {

const [tools,setTools]=useState([]);


useEffect(()=>{
    loadTools()
},[])


function loadTools(){
  API.getCategories().then(res=>setTools(res.data)).catch(err=>console.log(err))
};



    return (

                <div>
                 
                 <h2>Hello world !</h2>
                  

                   {tools.length ? (
              <ul>
                {tools.map(tool => {
                  return (
                    <p key={tool.id}>
                      <a href={"/tools/" + tool.id}>{tool.name}</a>
                      
                      <table>                     
                    
                      <div className="toolDetail" >
                      {tool.tools.map(tool=>{
                        
                    
                        return(
                          <tr>
                        <li><td>{tool.name}</td></li>
                      
                        </tr>
                        )
                        
                      })
                      }
                      </div>
                      </table>
                    </p> 
                   
                    );
                }
                
                )}
              </ul>
            ) : (
              <h3>No books were found.</h3>
            )}
              
                </div>


            
       
    )
}

export default ToolCard;


