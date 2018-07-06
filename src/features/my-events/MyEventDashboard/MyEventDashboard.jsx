import React from 'react';
import { Grid, Segment, Card, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventCard from './EventCard';

const mapState = state => ({
    events: state.events
})

const MyEventDashboard = ({ events }) => { 
    return (
      <Grid>
        <Grid.Column width={16}>
            <Segment>
                <Header dividing content="My Events"/>
                <Card.Group itemsPerRow={4} stackable>
                    {events && events.map(event => <EventCard key={event.id} event={event}/>)}
                </Card.Group>
            </Segment>
        </Grid.Column>
      </Grid>
    )
  }

export default connect(mapState)(MyEventDashboard);