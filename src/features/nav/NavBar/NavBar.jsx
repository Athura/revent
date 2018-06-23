import React, { Component } from "react";
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from '../../modals/modalActions';

const actions = {
  openModal
}

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class NavBar extends Component {

  _handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  _handleRegister = () => {
    this.props.openModal('RegisterModal');
  }

  _handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated &&
          <Menu.Item position="right">
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            /> 
          </Menu.Item> }
          {authenticated ? (
            <SignedInMenu auth={auth} profile={profile} signOut={this._handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this._handleSignIn} register={this._handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
