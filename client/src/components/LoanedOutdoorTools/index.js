import React, { useEffect, useState } from "react";
import api from "../../utils/api";

//make category.id # a prop so the # of components can be divided by 5
function LoanedOutdoorTools() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadTools()
  }, [])


  function loadTools() {
    api.getCategories().then(res => setCategories(res.data)).catch(err => console.log(err))
    // api.getAvailable().then(res => setCategories(res.data)).catch(err => console.log(err))
  };

  // console.log(categories.tools[2]);
  // const {tools} = categories
  // const myTools = tools[0]
  // console.log(categories[0].available)
  // const {available} =categories
  // console.log(`This is what u came for = ${available}`)
  return (
    <>
      {/* <div>Stupid</div> */}

      <div>

{categories.length ? (
  <ul>
    {categories.map(category => {
      if (category.id === 3) {
        // if (category.tools.available.length = 0) { return <h3>No Toolzz were found.</h3> }
        // else {

          return (
            <div key={category.id}>
              {/* <a href={"/tools/" + category.id}>{category.name}</a> */}

              <ul>

                <div className="toolDetail" >
                  {category.tools.map(tool => {


                    if (tool.available === false) {
                      return (
                        <li key={tool.id}>{tool.name} {console.log(tool.name)}</li>
                      )
                    }
                    else {
                      return null
                    }
                  })
                  }
                </div>
              </ul>
            </div>

        );
      }
    else {
        return (
    null
    )
      }
    }

    )}
  </ul>
) : (
  <h3>No Toolss were found.</h3>
)}

</div>
      {/* {categories.length ?
       ( <div>{console.log(`THIS IS object looking for = ${categories}`)}
    
        </div>)
        : (<div/>
          //similar to 'return null'
          )


//       ( <div>{console.log(`THIS IS categories.length = ${categories.available.length}`)}
// <h3>No Tools were found.</h3>
// </div>
//         )
//         : (
//           <ul>{
//             categories.map(tool => {
//               if (tool.available === false) {
//                 return (
//                   <li key={tool.id}>{tool.name}</li>
//                 )
//               }
//               else {
//                 return null
//               }
//             })
//           }</ul>
//         )

      } */}
    </>
    //   <div>

    //     {categories.length ? (
    //       <ul>
    //         {categories.map(category => {
    //           // if (category.id === 3) {
    //           //   if (tools.available.length === 0) { return <h3>No Toolzz were found.</h3> }
    //           //   else {

    //               return (
    //                 <div key={category.id}>
    //                   {/* <a href={"/tools/" + category.id}>{category.name}</a> */}

    //                   <ul>

    //                     <div className="toolDetail" >
    //                       {category.tools.map(tool => {


    //                         if (tool.available === false) {
    //                           return (

    //                             <li key={tool.id}>{tool.name}</li>


    //                           )
    //                         }
    //                         else {
    //                           return null
    //                         }
    //                       })
    //                       }
    //                     </div>
    //                   </ul>
    //                 </div>

    //             )
    //         //             }
    //         //   }
    //         // else {
    //         //     return (
    //         // null
    //         // )
    //         //   }
    //         }

    //         )}
    //       </ul>
    //     ) : (
    //       <h3>No Toolss were found.</h3>
    //     )}

    //   </div>




  )
}

export default LoanedOutdoorTools;