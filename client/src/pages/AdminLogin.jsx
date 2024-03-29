import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';

// reactstrap components
import {

  Row,
  Col,
} from "reactstrap";

// core components



async function checkUser() {
  if (this.props.authState.isAuthenticated && !this.state.userInfo) {
    const userInfo = await this.props.authService.getUser();
    if (this._isMounted) {
      this.setState({ userInfo });
    }
  }
}

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { userInfo: null };
    this.checkUser = checkUser.bind(this);

  }


  async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.props.oktaAuth.signOut();
  }
  render() {

    let body = null;
    if (this.props.authState.isAuthenticated) {
      body = (
        <div className="Buttons">
          You are currently logged in... click the button to logout.
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          You are not yet logged in... please click the button below to authenticate.
          <button onClick={this.login}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="wrapper">
          <div className="wrapper">
            <div className="page-header">

              <div className="content-center">
                <Row className="row-grid justify-content-between align-items-center text-left">
                  <Col lg="6" md="6">
                    <h1 className="text-white">
                      Welcome to the ToolShed! <br />
                      <span className="text-white"></span>
                    </h1>
                    <p className="text-white mb-3">
                      Where you can add, edit and LOAN tools from your inventory.
                      Where you can search for NEW tools and borrow from other users' inventories!...
                    </p>

                    <div className="btn-wrapper">
                      <div className="button-container">
                        {body}

                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="5">

                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});