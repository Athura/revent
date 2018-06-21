import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const UserDetailedSidebar = ({ isCurrentUser }) => {
  return (
    <Segment>
      {isCurrentUser ? (
        <Button
          as={NavLink}
          to="/settings"
          color="teal"
          fluid
          basic
          content="Edit Profile"
        />
      ) : (
        <Button color="teal" fluid basic content="Follow User" />
      )}
    </Segment>
  );
};

export default UserDetailedSidebar;
