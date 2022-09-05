import React from "react";
import { Menu } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
export default function Categories() {
  return (
    <div>
      {" "}
      <Menu pointing vertical>
        <Menu.Item>
          <Link to={"/"}> Home</Link>
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}
