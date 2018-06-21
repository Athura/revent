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

// May need to rewatch: go to section 21 lecture 205 for re explanation
// Takes in a dataset which is going to be our existing flat array and then we create a variable 
// called hash table that starts off with no object and then each item that we have in our dataset 
// we add an item (forEach) into our hash tale with an id and then we spread the available data 
// accross our child nodes. So each element in our array whether its a parent or child will have an empty array called child nodes.
// Then we have a dataTree variable with an empty array to loop over our datasets again and well say if a parent id as in ParentId is not 
// equal to 0 then well say if the inputs parentid matches a parent id then we'll push that child node into the parent
export const createDataTree = dataset => {
    let hashTable = Object.create(null);
    dataset.forEach(a => hashTable[a.id] = {...a, childNodes: []});
    let dataTree = [];
    dataset.forEach(a => {
        if (a.parentId) hashTable[a.parentId].childNodes.push(hashTable[a.id]);
        else dataTree.push(hashTable[a.id])
    });
    return dataTree
};