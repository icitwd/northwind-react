import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Menu, Container } from "semantic-ui-react";
import SignedIn from "../components/SignedIn";
import SignedOut from "../components/SignedOut";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const navigate = useNavigate();

  function handleSignOut() {
    setisAuthenticated(false);
    navigate("/");
  }
  function handleSignIn() {
    setisAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="messages">
            {" "}
            {isAuthenticated ? (
              <Link to={"/product/add"}> New Product</Link>
            ) : (
              ""
            )}
          </Menu.Item>
          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
