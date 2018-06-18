import { toastr } from "react-redux-toastr";
import {
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_EVENTS
} from "./eventConstants";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart
} from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";
import { createNewEvent } from '../../app/common/util/helpers';
import moment from 'moment';

export const fetchEvents = events => {
  return {
    type: FETCH_EVENTS,
    payload: events
  };
};

export const createEvent = event => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    // This will give us access to the user's main photo url
    const photoURL = getState().firebase.profile.photoURL;

    let newEvent = createNewEvent(user, photoURL, event);

    try {
      let createdEvent = await firestore.add(`events`, newEvent);
      // Creating the look up table
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        eventDate: event.date,
        host: true
      })
      toastr.success("Success", "Event has been created!");
    } catch (error) {
      toastr.error("Oops", "Something went wrong!");
    }
  };
};

export const updateEvent = event => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // this fixes the date getting reset to a random date bug
    if (event.date !== getState().firestore.ordered.events[0].date) {
      event.date = moment(event.date).toDate();
    }
    try {
      await firestore.update(`events/${event.id}`, event);
      toastr.success("Success", "Event has been updated!");
    } catch (error) {
      toastr.error("Oops", "Something went wrong!");
    }
  };
};

export const cancelToggle = (cancelled, eventId) => 
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`events/${eventId}`, {
        cancelled: cancelled
      })
    } catch (error) {
      console.log(error);
    }
  }

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleData();
      dispatch(fetchEvents(events));
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
