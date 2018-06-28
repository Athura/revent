import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignedOutMenu = ({ signIn, register }) => {
  return (
    <div>
      <Menu.Item position="right">
        <Button onClick={signIn} basic inverted content="Login" position="right" />
        <Button
          onClick = {register}
          basic
          inverted
          content="Register"
          style={{ marginLeft: "0.5em" }}
          position="right"
        />
      </Menu.Item>
    </div>
  );
};

export default SignedOutMenu;
