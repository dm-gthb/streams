import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class Auth extends React.Component {
  auth = false;
  userId = null;

  onSignInClick = () => {
    this.userId = 2985474990;
    this.props.signIn(this.userId);
    this.auth = true;
  }
  
  onSignOutClick = () => {
    this.props.signOut();
    this.userId = null;
    this.auth = false;
  }

  renderAuthButton() {
    const { isSignedIn } = this.props;
    switch(isSignedIn) {
      case false:
        return (
          <button 
            className="button ui red google"
            onClick={this.onSignInClick}>sign in</button>
        );
      case true:
        return (
          <button 
            className="button ui red google"
            onClick={this.onSignOutClick}>sign out</button>
        ); 
      default:
        return (
          <button 
            className="button ui red google"
            onClick={this.onSignInClick}>sign in</button>
        );
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, { signIn, signOut })(Auth);
