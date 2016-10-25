import React from 'react';

class Login extends React.Component {
  static propTypes = {
    authorized: React.PropTypes.bool.isRequired,
    onLoginRequest: React.PropTypes.func.isRequired,
    onLogoutRequest: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  loginClicked = () => {
    console.log('button clicked');
    this.props.onLoginRequest();
  }

  render () {
    const text = this.props.authorized ? 'Logout' : 'Login';
    return (
      <button id="login" onClick={this.loginClicked}>
        {text}
      </button>
    );
  }
}

export default Login;
