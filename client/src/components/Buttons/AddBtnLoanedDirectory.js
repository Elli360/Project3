import React from "react";
import {
  Button,
  UncontrolledTooltip,
} from "reactstrap";

export default function AddBtnLoanedDirectory({ handleClickAdd }) {



  return (
    <>
      <Button
        className="btn-icon btn-simple btn-round btn-neutral"
        color="success" id="tooltip20"
        onClick={handleClickAdd}>
        <i className="tim-icons icon-simple-add" />
      </Button>

      <UncontrolledTooltip delay={0} placement="left" target="tooltip20">
        Add Loaned Tool from Tool Directory
      </UncontrolledTooltip>
    </>
  );
}