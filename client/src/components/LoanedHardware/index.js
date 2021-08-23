
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

  },
    []);
  // const nopeTools =(<div>No more tool3</div>)
  const NopeTools = () => { return (<h3>No Available Tools</h3>) }
  // let notAvailable=false
  const toolsAvailable = categories.filter((row) => {
    if (row.available === false) { return row } else {
      return (
        // notAvailable=true
        null
      )
    }
  }).map((tool) => {

    // if (tool.available === false) {
    // setCount(prevState => (prevState+1))
    // setCount(count+1)
    return (
      <div className="toolDetail" >
        <ul>
          <li key={tool.id}>{tool.name}</li>
        </ul>
      </div>
    )
    // }
    // else {
    //   return (
    //   // <ul><li>Tool Not Available</li></ul>
    //   null
    //   )
    // }
  })


  // const nopeTools =()=>{ if(notAvailable){return(<div>No more tool3</div>)}}

  //   // if (count === 0){
  //   //   return (<div>No more toolz</div>)
  //   // }
  // if( !categories.available){
  //   return(nopeTools)
  // }

  // const notAvailable = () => {
  //   return function(){return(toolsAvailable)}.then(console.log(`toolsAvailable:${toolsAvailable}`)).then(nopeTools)
  //   }
  // const notAvailable = async() => {
  // const checkThis=await toolsAvailable
  // // console.log(`CHECKTHIS: ${checkThis}`)
  // console.log(`CHECKTHIS:`)
  // if (checkThis===null){return (
  //   <>
  //   {nopeTools}
  //   </>
  // )}
  // }
  const DefaultNotAvailable = () => {
    if (toolsAvailable == "")
      return NopeTools();

    return null;
  }

  return (

    <div>
      {toolsAvailable}
      <DefaultNotAvailable />
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
