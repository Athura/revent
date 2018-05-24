import React, { Component } from "react";
import { connect } from 'react-redux';
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";


const mapState = (state) => ({
  events: state.events
})

class EventDashboard extends Component {
    state = {
      isOpen: false,
      selectedEvent: null
    };
  

  // arrow function does the binding for us
  _handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  _handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  _handleUpdateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          //object assign clones your object, copy updated event into the empty object then replaces current event
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  _handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  _handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "assets/user.png";

    const updatedEvents = [...this.state.events, newEvent];

    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  _handleDeleteEvent = eventId => () => {
    const updateEvents = this.state.events.filter(
      e => e.id !== eventId
    );
    this.setState({
      events: updateEvents
    });
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventOpen={this._handleOpenEvent}
            events={events}
            deleteEvent={this._handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this._handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              selectedEvent={selectedEvent}
              createEvent={this._handleCreateEvent}
              _handleCancel={this._handleCancel}
              updateEvent={this._handleUpdateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(EventDashboard);
