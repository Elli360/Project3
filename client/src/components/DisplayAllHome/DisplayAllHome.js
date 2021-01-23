import React from 'react';
import {
    Button
} from "reactstrap";


export default function DisplayAllHome() {
    return (
        <>
<div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Open the door to your ToolShed
                  </p>

                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                </>
                )
}