import { withOktaAuth } from '@okta/okta-react';
import React, { Component } from 'react';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  async login() {
    this.props.authService.login('/profile');
  }

  render() {
    if( this.props.authState.isPending ) {
      return (
       
        <div>Loading authentication...
        </div>
      );
    } else if( !this.props.authState.isAuthenticated ) {
      return (
        <div>
          <a onClick={this.login}>Login</a>
        </div>
      );
    }
  }
});