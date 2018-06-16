import React from 'react';
import { Segment, Grid, Header, Item, Icon, List } from 'semantic-ui-react';
import format from 'date-fns/format';

const UserDetailedInfo = ({profile}) => {
  let createdDate;
  if(profile.createdAt) {
    createdDate = format(profile.createdAt.toDate(), 'D MMM YYYY');
  } 
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={10}>
          <Header icon="smile" content="About Display Name" />
          <p>
            I am a: <strong>{profile.occupation}</strong>
          </p>
          <p>
            Originally from <strong>{profile.city}</strong>
          </p>
          <p>
            Member Since: <strong>{createdDate}</strong>
          </p>
          <p>{profile.about}</p>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header icon="heart outline" content="Interests" />
          {profile.interests ?
          <List>
            {profile.interests && 
              profile.interests.map((interest, index) => (
                <Item key={index}>
                  <Icon name="heart" />
                  <Item.Content>{interest}</Item.Content>
                </Item>
              ))
            }
          </List> : <p>No interests</p> }
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default UserDetailedInfo;
