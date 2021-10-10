import React, { useEffect, useState } from "react";

// import PerfectScrollbar from "perfect-scrollbar";
import {
  Button,
} from "reactstrap";

export default function ViewToolsBtnHome( { handleClick, directionArrow,setToolshedImgOpacity }) {


  // let [toolshedImgOpacity, setToolshedImgOpacity] = useState(0.2);

  let handleHoverOver = () => {
    setToolshedImgOpacity(1);
  }
  let handleHoverOut = () => {
    setToolshedImgOpacity(0.2);
  }
//   function handleChange(event) {
//     // Here, we invoke the callback with the new value
//     props.onChange(event.target.value);
// }
//   props.toolshedStyle = {
//     opacity: toolshedImgOpacity ,
//   };
  // useEffect(() => {

  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.className += " perfect-scrollbar-on";
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       // ps = new PerfectScrollbar(tables[i]);
  //       PerfectScrollbar(tables[i]);
  //     }
  //   }

  // }, []);

  //  toolshedStyle = {
  //   opacity: toolshedImgOpacity ,
  // };
  

  return (

    <Button
      className="btn-link"
      color="success"
      onClick={handleClick}
      // onHover={handleHover}
      onMouseOver={() => handleHoverOver()}
      onMouseOut={() => handleHoverOut()}

      size="sm"

      // value={props.value} onChange={handleChange}
    >
      <i className={`tim-icons icon-minimal-${directionArrow}`} />

    </Button>
  )
}