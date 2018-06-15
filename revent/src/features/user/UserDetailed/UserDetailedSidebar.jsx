import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const UserDetailedSidebar = () => {
  return (
    <Segment>
      <Button as={NavLink} to='/settings' color='teal' fluid basic content='Edit Profile'/>
    </Segment>
  )
}

export default UserDetailedSidebar;