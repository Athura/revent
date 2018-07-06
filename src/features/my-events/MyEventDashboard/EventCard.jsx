import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <Card as={Link} to={`/event/${event.id}`}>
      <Image src={`/assets/categoryImages/${event.category}.jpg`} />
      <Card.Content>
        <Card.Header textAlign="center">{event.title}</Card.Header>
      </Card.Content>
      <Card.Meta textAlign="center" >
        <span>{event.description}</span>
      </Card.Meta>
    </Card>
  );
};

export default EventCard;
