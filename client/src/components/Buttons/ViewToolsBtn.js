import React, {  } from "react";

// import PerfectScrollbar from "perfect-scrollbar";
import { Button } from "reactstrap";

export default function ViewToolsBtn({
  handleClick,
  directionArrow,
  setImgOpacity,
  opacityOver,
  opacityOut,
}) {
  let handleHoverOver = () => {
    setImgOpacity(opacityOver);
  };
  let handleHoverOut = () => {
    setImgOpacity(opacityOut);
  };

  return (
    <Button
      className="btn-link"
      color="success"
      onClick={handleClick}
      onMouseOver={() => handleHoverOver()}
      onMouseOut={() => handleHoverOut()}
      size="sm"

      // value={props.value} onChange={handleChange}
    >
      <i className={`tim-icons icon-minimal-${directionArrow}`} />
    </Button>
  );
}
