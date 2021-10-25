import React,{useState, useEffect} from 'react';
import {
    Row,
    Col,
} from "reactstrap";
import { useOktaAuth } from '@okta/okta-react';

export default function UserNameDisplay() {
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
  
    useEffect(() => {
      if (!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info
        setUserInfo(null);
      } else {
        oktaAuth.getUser().then((info) => {
          setUserInfo(info);
        });
      }
    }, [authState, oktaAuth]); // Update if authState changes
  
    if (!userInfo) {
        return (
          <div>
            <p>Fetching user profile...</p>
          </div>
        );
      }
    return (
        <>
            <Row>
                <Col lg="6" md="6">
                <h3 className="text-on-back">UserName</h3>
                       {/*using okta object, key is preferred_name */}
                       <h2>{Object.values(userInfo)[4]}</h2>
                   
                </Col>
            </Row>

        </>

    )
}