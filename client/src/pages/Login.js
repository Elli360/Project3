import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';

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
          <button onClick={this.logout}>Logout</button>    
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          <button onClick={this.login}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
         
       
          <h1>Welcome to the Toolshed</h1>
          {body}
        </header>
      </div>
    );
  }
});
