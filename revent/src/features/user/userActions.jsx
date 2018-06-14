import moment from 'moment';
import { toastr } from 'react-redux-toastr'

export const updateProfile = (user) => 
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const {isLoaded, isEmpty, ...updatedUser} = user;
        // we add the condition for getState here to solve basic page's invalid date problem
        if (updatedUser.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
            updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
        }

        try {
            await firebase.updateProfile(updatedUser);
            toastr.success('Success', 'Profile updated!')
        } catch (error) {
            console.log(error);
        }
    } 