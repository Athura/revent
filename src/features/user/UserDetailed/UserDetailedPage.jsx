import React, {Component} from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { Grid } from "semantic-ui-react";
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedInfo from './UserDetailedInfo';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedSidebar from './UserDetailedSidebar';
import { userDetailedQuery } from '../userQueries';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { getUserEvents } from '../userActions';

const mapStateToProps = (state, ownProps) => {
    let userUid = null;
    let profile = {};

    if(ownProps.match.params.id === state.auth.uid) {
        profile = state.firebase.profile
    } else {
        profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
        userUid = ownProps.match.params.id;
    }
    return {
        profile,
        userUid,
        events: state.events,
        eventsLoading: state.async.loading,
        auth: state.firebase.auth,
        photos: state.firestore.ordered.photos,
        requesting: state.firestore.status.requesting
    }
}

const actions = {
    getUserEvents
}

 class UserDetailedPage extends Component {

    async componentDidMount() {
        let user = await this.props.firestore.get(`users/${this.props.match.params.id}`);
        if(!user.exists) {
            toastr.error('Not Found', 'This is not the user you are looking for!');
            this.props.history.push('/error');
        }
        let events = await this.props.getUserEvents(this.props.userUid);
        console.log(events);
    }

    _changeTab = (event, data) => {
        this.props.getUserEvents(this.props.userUid, data.activeIndex)
    }

     render() {
         const { profile, photos, auth, match, requesting, events, eventsLoading } = this.props;
         const isCurrentUser = auth.uid === match.params.id;
         const loading = requesting[`users/${match.params.id}`];

         if(loading) {
             return <LoadingComponent inverted={true} />
         }
        return (
            <Grid>
                <Grid.Column width={16}>
                    <UserDetailedHeader profile={profile} />
                </Grid.Column>
                <Grid.Column width={12}>
                    <UserDetailedInfo profile={profile} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <UserDetailedSidebar isCurrentUser={isCurrentUser} />
                </Grid.Column>

                <Grid.Column width={12}>
                {photos && photos.length > 0 &&
                <UserDetailedPhotos photos={photos} /> }
                </Grid.Column>

                <Grid.Column width={12}>
                    <UserDetailedEvents changeTab={this._changeTab} events={events} eventsLoading={eventsLoading} />
                </Grid.Column>
            </Grid>
            );
        }   
    }
 

export default compose(
    connect(mapStateToProps, actions
    ),
    firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))
)(UserDetailedPage);