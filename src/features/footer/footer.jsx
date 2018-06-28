import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Menu className="footer segment" fixed="bottom" inverted>
                <Menu.Item as={Link} to="/privacy" name="Privacy Policy">
 
                </Menu.Item>
                <Menu.Item>
                    Copyright 2018
                </Menu.Item>
            </Menu>
        </div>
        
    )
}