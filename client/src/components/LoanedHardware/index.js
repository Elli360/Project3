
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function LoanedHardware() {
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);
    useEffect(() => {

    const loadTools = async () => {

      const first = await api.getCategories();
      const res = await first.data[4].tools;
    
      
      // console.log(`CONSOLE CHECK : ${res[3].id}`);
      console.log(`CONSOLE CHECK : ${res[3].id}`);
      // console.log(...toolsAvailable, `facts`)
      setCategories(res);
    
    }

    loadTools()
   
  },
    []);
    
  
  const toolsAvailable = categories && categories.map((tool, index) => {
    if (tool.available === false) {
      setCount(count+1);
      return (
        <ul>
          <li key={tool.id}>{tool.name}{index}</li>
        </ul>
        // <ul>ToolsWork</ul>
      )
    }
    else {
      return (
      // <ul><li>Tool Not Available</li></ul>
      null
      )
    }
  });

  // const ToolsConditional = () => {
  //   // const toolsTrue = () => { return (<div>{toolsAvailable}</div>) }
    const toolsFalse = () => { return (<div>No more toolz</div>) }
  //   if (categories) {
  //     //  const renderTools = <toolsTrue/>
  //     // const renderTools = <toolsTrue/>;

  //     return (
  //       // console.log(`Because I'm SAD!`),
  //       // renderTools

  //       // {toolsTrue}
  //     <div>It Worked? </div>
  //       )
  //   }
  //   else {
  //     return (  
  //       {toolsFalse}
  //     )
  //   }
  // }
  if (count === 0){
    return toolsFalse
  }
  
  return (

    <div>
      {toolsAvailable}
      {console.log(`Checking toolsAvailable: ${toolsAvailable} and ToolConditional:${toolsAvailable}`)}
  

    </div>
    

  )
}

export default LoanedHardware;




//simplied plus works sans the <div>NO tools</div>
    // <div>
    //   {categories.length ? (
    //     <ul>
    //       <div className="toolDetail" >
    //         {categories.map(tool => {
    //           if (tool.available === false) {
    //             return (
    //               <li key={tool.id}>{tool.name}{console.log(tool.available)}</li>
    //             )
    //           }
    //           else {
    //             return null
    //           }
    //         })}
    //       </div>
    //     </ul>
    //   ) : (

    //     <div>No toolz</div>
    //   )
    //   }
    // </div>
