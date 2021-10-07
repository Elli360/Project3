import React,{ useEffect, useState, useRef } from "react";

import PerfectScrollbar from "perfect-scrollbar";
import {
    Button,
} from "reactstrap";

export default function ViewToolsBtn({handleClick}) {

    // const toolsByCategory = useRef();
    
    const [displayBorrowedByCategory, setDisplayBorrowedByCategory] = useState(false);
    const [setToolshedImgOpacity] = useState(0.2);


//  props.fix = 
//     toolsByCategory.current.scrollIntoView({
//     behavior: "smooth",
//   });

    // let handleClick = () => {
    //     setDisplayBorrowedByCategory(true);
    //   //  toolsByCategory.fixer;
    //  fix={fix};
    //   };
    // handleClick={handleClick}

    let handleHover = () => {
        setToolshedImgOpacity(1);
      }
      let handleHover2 = () => {
        setToolshedImgOpacity(0.2);
      }

      useEffect(() => {

        if (navigator.platform.indexOf("Win") > -1) {
          document.documentElement.className += " perfect-scrollbar-on";
          document.documentElement.classList.remove("perfect-scrollbar-off");
          let tables = document.querySelectorAll(".table-responsive");
          for (let i = 0; i < tables.length; i++) {
            // ps = new PerfectScrollbar(tables[i]);
            PerfectScrollbar(tables[i]);
          }
        }
    
      }, []);

      return (

      <Button
      className="btn-link"
      color="success"
      onClick={handleClick}
      // onHover={handleHover}
      onMouseOver={() => handleHover}
      onMouseOut={() => handleHover2}

      size="sm"
    >
      <i className="tim-icons icon-minimal-left" />

    </Button>
      )
}