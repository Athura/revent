import React from 'react';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';


// We don't need to filter the photos, similar to the Photos page because we're not worried about displaying a main photo twice
// We will use a map towards photos here to display all the images stored in firebase 
// In the UserDetailedPage we will put the conditional to display the component because if any exist we don't want to display a blank component
const UserDetailedPhotos = ({ photos }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Photos" />

        <Image.Group size="small">
          {photos &&
            photos.map(photo => (
              <LazyLoad
                key={photo.id}
                height={150}
                placeholder={<Image src="/assets/user.png" />}
              >
                <Image src={photo.url} />
              </LazyLoad>
            ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedPhotos;

