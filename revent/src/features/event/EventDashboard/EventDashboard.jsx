import React, { Component } from "react";
import { connect } from 'react-redux';
import { Grid  } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { deleteEvent } from '../eventActions'


const mapState = (state) => ({
  events: state.events
})

const actions = {
  deleteEvent
}

class EventDashboard extends Component {
  

    /*
  // arrow function does the binding for us
  _handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  */

  /*
  _handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };
  */

  /*
  _handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };
  */

  /*
  _handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };
  */

  /*
  _handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "assets/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };
  */

  _handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this._handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
