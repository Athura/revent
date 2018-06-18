import moment from 'moment';

// We use this to help convert firestore objects to array; else we would be getting attendees.map is not a function and so on
// Object.entries gives us the key and the values, we want to input the key into the array so we can use it in a map
// Once we push our objects through this then we will get the key of the object and return that as an id inside the object
export const objectToArray = (object) => {
    if(object) {
        return Object.entries(object).map(event => Object.assign(event[1], {id: event[0]}))
    }
}

// event actions makes this call and sends the variables
// shaping our event object
export const createNewEvent = (user, photoURL, event) => {
    event.date = moment(event.date).toDate();
    return {
        ...event, 
        hostUid: user.uid,
        hostedBy: user.displayName,
        hostPhotoURL: photoURL || '/assets/user.png',
        created: Date.now(),
        attendees: {
            [user.uid]: {
                going: true,
                joinDate: Date.now(),
                photoURL: photoURL || '/assets/user.png',
                displayName: user.displayName,
                host: true
            }
        }
    }
}