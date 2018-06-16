import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid } from "semantic-ui-react";
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedInfo from './UserDetailedInfo';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedSidebar from './UserDetailedSidebar';

const query = ({ auth }) => {
    return [
        {
            collection: 'users',
            doc: auth.uid,
            subcollections: [{ collection: 'photos' }],
            storeAs: 'photos'
        }
    ];
};

const mapStateToProps = (state) => ({
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos
})

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
    firestoreConnect(auth => query(auth))
)(UserDetailedPage);