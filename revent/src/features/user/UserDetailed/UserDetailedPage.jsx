import React, {Component} from 'react';
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
        auth: state.firebase.auth,
        photos: state.firestore.ordered.photos
    }
}

 class UserDetailedPage extends Component {
     render() {
         const { profile, photos } = this.props;
        return (
            <Grid>
                <Grid.Column width={16}>
                    <UserDetailedHeader profile={profile} />
                </Grid.Column>
                <Grid.Column width={12}>
                    <UserDetailedInfo profile={profile} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <UserDetailedSidebar />
                </Grid.Column>

                <Grid.Column width={12}>
                    <UserDetailedPhotos photos={photos} />
                </Grid.Column>

                <Grid.Column width={12}>
                    <UserDetailedEvents />
                </Grid.Column>
            </Grid>
            );
        }   
    }
 

export default compose(
    connect(mapStateToProps
    ),
    firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))
)(UserDetailedPage);