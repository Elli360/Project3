import React , { useEffect, useState } from "react";
import api from "../../utils/api";


function OutdoorTools () {

const [categories,setCategories]=useState([]);

useEffect(()=>{
    loadTools()
},[])


function loadTools(){
  api.getCategories().then(res=>setCategories(res.data)).catch(err=>console.log(err))
};

  console.log(categories);

    return (

                <div>
    
                   {categories.length ? (
              <ul>
                {categories.map(category => {
                    if(category.id===3){
                  return (
                    <div key={category.id}>
                      {/* <a href={"/tools/" + category.id}>{category.name}</a> */}
                      
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
                }
                
                )}
              </ul>
            ) : (
              <h3>No Tools were found.</h3>
            )}
              
                </div>


            
       
    )
}

export default OutdoorTools;


