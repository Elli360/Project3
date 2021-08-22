
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function LoanedHardware() {
  // const [count, setCount] = useState(0);
  const [categories, setCategories] = useState([]);
  

  const loadTools = async () => {

    const first = await api.getCategories();
    const res = await first.data[4].tools;
    // console.log(`CONSOLE CHECK : ${res[3].id}`);
    // console.log(...toolsAvailable, `facts`)
    setCategories(res);
  
  }


    useEffect(() => {

 

    loadTools()
    // }) 
  },
    []);
    const nopeTools =(<div>No more tool3</div>)
    // let notAvailable=false
  const toolsAvailable =  categories.filter((val)=>{
    if (val.available === false){return val}else {return (
    // notAvailable=true
    null

    )}
  }).map((tool,index) => {

    // if (tool.available === false) {
      // setCount(prevState => (prevState+1))
      // setCount(count+1)
      return (
        <ul>
          <li key={tool.id}>{tool.name} index={index}</li>
        </ul>
        // <ul>ToolsWork</ul>
      )
    // }
    // else {
    //   return (
    //   // <ul><li>Tool Not Available</li></ul>
    //   null
    //   )
    // }
  });

  // const nopeTools =()=>{ if(notAvailable){return(<div>No more tool3</div>)}}

//   // if (count === 0){
//   //   return (<div>No more toolz</div>)
//   // }
// if( !categories.available){
//   return(nopeTools)
// }
const notAvailable = async() => {
const checkThis=await categories.filter()
if (checkThis===null){return nopeTools}
}
  
  return (

    <div>
      {toolsAvailable }
     
  {/* {nopeTools} */}
{notAvailable}
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
