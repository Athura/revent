import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react';

const UserDetailedPhotos = () => {
  return (
    <Segment attached>
      <Header icon="image" content="Photos" />

      <Image.Group size="small">
        <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
        <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
        <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
        <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
      </Image.Group>
    </Segment>
  );
};

export default UserDetailedPhotos;
