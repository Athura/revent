import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react';

// We don't need to filter the photos, similar to the Photos page because we're not worried about displaying a main photo twice
// We will use a map towards photos here to display all the images stored in firebase 
// In the UserDetailedPage we will put the conditional to display the component because if any exist we don't want to display a blank component
const UserDetailedPhotos = ({photos}) => {
  return (
    <Segment attached>
      <Header icon="image" content="Photos" />
      {photos ? 
      <Image.Group size="small">
        {photos && 
          photos.map((photo) => (
            <Image key={photo.id} src={photo.url} />
          ))
        }
      </Image.Group> : <p>No photos to see here</p> }
  </Segment>   
  );
};

export default UserDetailedPhotos;
