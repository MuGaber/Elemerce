import React from "react";
import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option sign-out" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);