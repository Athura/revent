import React from 'react';
import { Segment, Item, Header } from 'semantic-ui-react'

const UserDetailedHeader = () => {
  return (
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image
            avatar
            size="small"
            src="https://randomuser.me/api/portraits/men/20.jpg"
          />
          <Item.Content verticalAlign="bottom">
            <Header as="h1">First Name</Header>
            <br />
            <Header as="h3">Occupation</Header>
            <br />
            <Header as="h3">27, Lives in London, UK</Header>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default UserDetailedHeader;
