import React, {Component} from 'react';
import { Grid } from "semantic-ui-react";
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedInfo from './UserDetailedInfo';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedSidebar from './UserDetailedSidebar';

class UserDetailedPage extends Component {

    render() {

        return (
            <Grid>
                <Grid.Column width={16}>
                    <UserDetailedHeader />
                </Grid.Column>
                <Grid.Column width={12}>
                    <UserDetailedInfo />
                </Grid.Column>
                <Grid.Column width={4}>
                    <UserDetailedSidebar />
                </Grid.Column>

                <Grid.Column width={12}>
                    <UserDetailedPhotos />
                </Grid.Column>

                <Grid.Column width={12}>
                    <UserDetailedEvents />
                </Grid.Column>
            </Grid>

        );
    }
}

export default UserDetailedPage;