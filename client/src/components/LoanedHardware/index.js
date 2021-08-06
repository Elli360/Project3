
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
// const delay = 2;
//make category.id # a prop so the # of components can be divided by 5
function LoanedHardware() {
  // const [show, setShow] = useState(false);
  // const [categories, setCategories] = useState([]);
  const [categories, setCategories] = useState('');
  useEffect(() => {
    // loadTools()

    if (!categories) {
      loadTools()
    }


    //        let timer1 = setTimeout(() => setShow(true), delay * 1000);

    //     // this will clear Timeout
    //     // when component unmount like in willComponentUnmount
    //     // and show will not change to true
    //     return () => {
    //       loadTools()
    //       clearTimeout(timer1);
    //     };
  },
    // // useEffect will run only one time with empty []
    // // if you pass a value to array,
    // // like this - [data]
    // // than clearTimeout will run every time
    // // this value changes (useEffect re-run)
    []);

  // function loadTools() {
  //   api.getCategories().then(res => setCategories(res.data)).then((categories)=>console.log(`LOVE ${categories[1]} PATH`))
  // };

  const loadTools = async () => {

    const first = await api.getCategories();
    const res = await first.data[4].tools;
    // console.log(`CONSOLE CHECK : ${res[3].id}`);
    console.log(`CONSOLE CHECK : ${res[3].id}`);
    setCategories(res);
  }
  // console.log(categories);
  // console.log(`HELLO WORLD=${categories[0].name}`)

  return (

//works sans the <div>NO tools</div>
    // <div>
    //   {categories.length ? (
    //     <ul>
    //       {categories.map(category => {
    //         if (category.id === 5) {
    //           // const hardwareAnswer = category
    //           return (
    //             <div key={category.id}>
    //               {/* <a href={"/tools/" + category.id}>{category.name}</a> */}

    //               <ul>

    //                 <div className="toolDetail" >
    //                   {/* {hardwareAnswer.length?.map(tool => { */}
    //                     {category.tools.map(tool => {

    //                     if (tool.available === false) {
    //                       return (
    //                         <li key={tool.id}>{tool.name}{console.log(tool.name)}</li>
    //                       )
    //                     }
    //                     else {
    //                       return null
    //                     }
    //                   })}

    //                 </div>
    //               </ul>
    //             </div>

    //           );
    //         }
    //         else {
    //           return null
    //         }
    //       }

    //       )}
    //     </ul>
    //   ) : (
    //     // show ? (
    //     //   <h3>No Tools were found.</h3>

    //     //   ) : (
    //         <div>No Tools were found.</div>
    //       // )

    //   )}

    // </div>




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



//simplied sans the <div>NO tools</div>
    <div className="toolDetail" >
      
            {categories && categories.map(tool => {
              if (tool.available === false) {
                return (
                  <ul>
                  <li key={tool.id}>{tool.name}{console.log(tool.available)}</li>
                  </ul>
                )
              }
              else {
                return null
              }
            })}
       
    </div>
        
       
  
   
  )
}

export default LoanedHardware;
