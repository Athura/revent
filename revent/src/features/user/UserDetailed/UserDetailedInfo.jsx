import React from 'react';
import { Segment, Grid, Header, Item, Icon, List } from 'semantic-ui-react';

const UserDetailedInfo = () => {
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={10}>
          <Header icon="smile" content="About Display Name" />
          <p>
            I am a: <strong>Occupation Placeholder</strong>
          </p>
          <p>
            Originally from <strong>United Kingdom</strong>
          </p>
          <p>
            Member Since: <strong>28th March 2018</strong>
          </p>
          <p>Description of user</p>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header icon="heart outline" content="Interests" />
          <List>
            <Item>
              <Icon name="heart" />
              <Item.Content>Interest 1</Item.Content>
            </Item>
            <Item>
              <Icon name="heart" />
              <Item.Content>Interest 2</Item.Content>
            </Item>
            <Item>
              <Icon name="heart" />
              <Item.Content>Interest 3</Item.Content>
            </Item>
          </List>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default UserDetailedInfo;
