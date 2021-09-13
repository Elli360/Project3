// import React, { useEffect, useState} from "react";
// import api from "../../../utils/api";
// // import * as api  from '../../../utils/api.js';
// // import DeleteBtn from "../../DeleteBtn";
// // import { Inputs, TextArea, FormBtn } from "../../Form";
// // import { List, ListItem } from "../../List";
// import { List } from "../../List";
// import UpdateTool from '../../UpdateTool';

// function UpdateCard() {

//   const [tools, setTools] = useState("");
//   const [allCheckbox, setAllCheckbox] = useState("");
//   const [checkMark, setCheckMark] = useState("");
//   // const [checkMarkz, setCheckMarkz] = useState(false);
//   useEffect(() => {
//     loadTools();
//   }, [])

//   // useEffect(() => {

//   //   loadForAllTools();
//   //   // setCheckMark();

//   // }, [handleAllChange])
//   function loadTools() {
//     api.getTools().then(res => setTools(res.data)).catch(err => console.log(err))
//   };
//   function loadForAllTools() {
//     api.getTools().then(res => setAllCheckbox(res.data[0].available)).catch(err => console.log(err))
//   };
//   // useEffect(() => {

//   //   loadForAllTools();
//   //   handleAllChange();
//   //   // setCheckMark();
//   // }, [])

//   // function handleFormSubmit(event) {
//   //   event.preventDefault();
//   //     api.updateTool({
//   //       // name: formObject.name,
//   //       // description: formObject.description,
//   //       // categoryId: formObject.categoryId,
//   //       // price: formObject.price,
//   //       available:formObject.available
//   //       // price: formObject.price,
//   //       // available:formObject.available
//   //     })
//   //       .then(() => setFormObject({
//   //         // name: "",
//   //         // description: "",
//   //         // price:0,
//   //         // categoryId: 0,
//   //         // price: "",
//   //         available:""
//   //         }))
//   //       .then(() => loadTools())
//   //       .catch(err => console.log(err));

//   // };

//   // const [formObject, setFormObject] = useState({
//   //   // name:"",
//   //   // description:"",
//   //   // price:[],
//   //   // categoryId: 0,
//   //   available:true
//   // });



//   //changes tool availability array individually
//   function handleInputChange(id, available) {
//     // event.preventDefault();
//     // const { name, value } = event.target;
//     // setFormObject({...formObject, [name]: value})
//     api.updateTool(id, { available })
//       .then(() => loadTools())
//       .catch(err => console.log(err));
//   };

//   //changes tool availability array in unison
//   // const handleAllChange = useCallback((event)=> {
//   function handleAllChange(event) {
//     // const checkMark = event.target.checked;
//     // setCheckMark(event.target.checked);
//     if (!event.target.checked) {
//       setCheckMark(event.target.checked);
//       // function handleAllInputChange(available) {
//       for (let allId = 0; allId < tools.length; allId++) {
//         // event.preventDefault();
//         // const { name, value } = event.target;
//         // setFormObject({...formObject, [name]: value})
//         // api.updateTool(allId, { available })
//         api.updateTool(allId, false)
//           .then(() => loadTools())
//           .catch(err => console.log(err));
//       }
//       // };
//       // handleAllInputChange(false);
//     } else if (event.target.checked) {
//       setCheckMark(event.target.checked);
//       // function handleAllInputChange(available) {
//       for (let allId = 0; allId < tools.length; allId++) {
//         // event.preventDefault();
//         // const { name, value } = event.target;
//         // setFormObject({...formObject, [name]: value})
//         // api.updateTool(allId, { available })
//         api.updateTool(allId, true)
//           .then(() => loadTools())
//           .catch(err => console.log(err));
//       }
//       // };
//       // handleAllInputChange(true);
//     }
//     // setCheckMarkz(checkMark);
    
//     // setCheckMark(()=>(event)=>event.target.checked);
//     // setCheckMarkz(checkMark);

//   }
//   // })


//   // const allChecked = () => {
//   //   if (allCheckbox === true) { setCheckMarkz(true) } else { setCheckMarkz(false) }
//   // };
//   // const allCheckbox = tools[0].available;
//   console.log(`This is not tools: ${allCheckbox}`);

//   // useEffect(() => {
//   //   allChecked();
//   // });

//   useEffect(() => {

//     loadForAllTools();
//     // setCheckMark();

//   }, [])
  
//   return (
//     <div>

//       <h2>Sign a tool out...</h2>
//       <hr></hr>
//       {/* {tools.length ? (<h3>
//         Change Availability of ALL tools: {allCheckbox.toString()}
//         <input type="checkbox"
//           onChange={handleAllChange}
//           defaultChecked={allCheckbox}
//         />
//       </h3>) : (<h3>No Toolz</h3>)
//       }; */}

//       <h3 className="allToolsCheckbox" >
//         Change Availability of ALL tools: {allCheckbox.toString()}
//         <input type="checkbox"
//           onChange={handleAllChange}
//           // defaultChecked={allCheckbox}
//           checked={checkMark}
          
//         >{console.log(`This is checkMark: ${checkMark}`)}</input>
//       </h3>
//       {tools.length ? (
//         <ul>
//           {tools.length ? (
//             <List>
//               {tools.map(tool => {
//                 return (
//                   <UpdateTool key={tool.id}
//                     handleAvailableChange={handleInputChange}
//                     tool={tool}
//                   />
//                 );
//               })}
//             </List>
//           ) : (
//             <h3>No Results to Display</h3>
//           )}

//         </ul>
//       ) : (
//         <h3>No Tools were found.</h3>
//       )}

//     </div>

//   )
// }


// export default UpdateCard;






import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
// import * as api  from '../../../utils/api.js';
// import DeleteBtn from "../../DeleteBtn";
// import { Inputs, TextArea, FormBtn } from "../../Form";
// import { List, ListItem } from "../../List";
import { List } from "../../List";
import UpdateTool from '../../UpdateTool';

function UpdateCard() {
  // const [name] = useState(["1", "2"]);
  const [tools, setTools] = useState("");
  const [allCheckbox, setAllCheckbox] = useState("");
  const [check, setCheck] = useState([true, false]);
  const [checkMark, setCheckMark] = useState("");
  const [checkMarkz, setCheckMarkz] = useState("");
  useEffect(() => {
    loadTools();
  }, [])

  // useEffect(() => {

  //   loadForAllTools();
  //   // setCheckMark();
  // }, [])
  function loadTools() {
    api.getTools().then(res => setTools(res.data)).catch(err => console.log(err))
  };
  function loadForAllTools() {
    api.getTools().then(res => setAllCheckbox(res.data[0].available)).catch(err => console.log(err))
  };
  useEffect(() => {

    loadForAllTools();
    // setCheckMark();
  }, [])

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //     api.updateTool({
  //       // name: formObject.name,
  //       // description: formObject.description,
  //       // categoryId: formObject.categoryId,
  //       // price: formObject.price,
  //       available:formObject.available
  //       // price: formObject.price,
  //       // available:formObject.available
  //     })
  //       .then(() => setFormObject({
  //         // name: "",
  //         // description: "",
  //         // price:0,
  //         // categoryId: 0,
  //         // price: "",
  //         available:""
  //         }))
  //       .then(() => loadTools())
  //       .catch(err => console.log(err));

  // };

  // const [formObject, setFormObject] = useState({
  //   // name:"",
  //   // description:"",
  //   // price:[],
  //   // categoryId: 0,
  //   available:true
  // });

  //changes tool availability array individually
  function handleInputChange(id, available) {
    // event.preventDefault();
    // const { name, value } = event.target;
    // setFormObject({...formObject, [name]: value})
    api.updateTool(id, { available })
      .then(() => loadTools())
      .catch(err => console.log(err));
  };

  //changes tool availability array in unison
  function handleAllChange(event) {
    // const { id, checked } = event.target;
    // const index = name.indexOf(id);
    // var temp = check;
    // temp[index] = checked;
    // setCheck(temp);
    setCheck(event.target.checked)
    setCheckMark(event.target.checked);
    // const checkMark = event.target.checked;
    // setCheckMark(event.target.checked);
    if(!event.target.checked){
    function handleAllInputChange(available) {
      for (let allId = 0; allId < tools.length; allId++) {
        // event.preventDefault();
        // const { name, value } = event.target;
        // setFormObject({...formObject, [name]: value})
        api.updateTool(allId, { available })
          .then(() => loadTools())
          .catch(err => console.log(err));
      }
    };
    handleAllInputChange(false);
  }else if(event.target.checked){
    function handleAllInputChange(available) {
      for (let allId = 0; allId < tools.length; allId++) {
        // event.preventDefault();
        // const { name, value } = event.target;
        // setFormObject({...formObject, [name]: value})
        api.updateTool(allId, { available })
          .then(() => loadTools())
          .catch(err => console.log(err));
      }
    };
    handleAllInputChange(true);
  }
// setCheckMarkz(checkMark);
// setCheckMark(event.target.checked);
// setCheckMark(()=>(event)=>event.target.checked);
setCheckMarkz(allCheckbox.toString());
  
}
  // const allCheckbox = tools[0].available;
  console.log(`This is not tools: ${allCheckbox}`);
  const allCheckboxConst = () =>{
    return  <h3>Change Availability of ALL tools: {check.toString()}</h3>
  }

 


  return (
    <div>

      <h2>Sign a tool out...</h2>
      <hr></hr>
      {/* {tools.length ? (<h3>
        Change Availability of ALL tools: {allCheckbox.toString()}
        <input type="checkbox"
          onChange={handleAllChange}
          defaultChecked={allCheckbox}
        />
      </h3>) : (<h3>No Toolz</h3>)
      }; */}

      <h3 className="allToolsCheckbox">
         {allCheckboxConst()}
        {/* Change Availability of ALL tools:  */}
        <input type="checkbox"
          onChange={handleAllChange}
          // defaultChecked={allCheckbox}
          checked={check}
          
        />
      </h3>
      {tools.length ? (
        <ul>
          {tools.length ? (
            <List>
              {tools.map(tool => {
                return (
                  <UpdateTool key={tool.id}
                    handleAvailableChange={handleInputChange}
                    tool={tool}
                  />
                );
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


export default UpdateCard;