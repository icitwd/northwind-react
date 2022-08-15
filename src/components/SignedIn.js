import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG-702hI0XEMw/profile-displayphoto-shrink_800_800/0/1611919626142?e=1665619200&v=beta&t=WwpM01XqJAnZyMf1cjWF0RIrGfjQepSHowciMdH_vDg"
        />
        <Dropdown pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              text="Çıkış Yap"
              icon="sign-out"
              onClick={props.signOut}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
