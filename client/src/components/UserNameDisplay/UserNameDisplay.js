import React from 'react';
import {
    Row,
    Col,
  } from "reactstrap";


export default function UserNameDisplay() {
    return (
        <>
            <Row>
                <Col lg="6" md="6">
                    <h2 className="profile-title text-left">Michelle Fairbanks</h2>
                    <h4 className="text-on-back">UserName</h4>
                </Col>
            </Row>

        </>

    )
}