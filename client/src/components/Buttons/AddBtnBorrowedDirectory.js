import React from "react";
import {
    Button,
    UncontrolledTooltip,
} from "reactstrap";

export default function AddBtnBorrowedDirectory({ handleClickAdd }) {



    return (
        <>
            <Button
                className="btn-icon btn-simple btn-round btn-neutral"
                color="danger" id="tooltip24"
                onClick={handleClickAdd}>
                <i className="tim-icons icon-simple-add" />
            </Button>
            <UncontrolledTooltip delay={0} placement="left" target="tooltip24">
                Add Borrowed Tool FROM Tool Directory
            </UncontrolledTooltip>

        </>
    );
}