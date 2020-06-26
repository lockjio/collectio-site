import React from "react";
// Needed for routing
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

// Syntax for using SVG as component in react
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

// Destructuring 'prop' into their specific counterparts for syntactic sugar
const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			{/* Use the custom React Component for SVG imports */}
			<Logo className="logo" />
		</Link>
		<div className="options">
			{/* Use react-router-dom in navigation */}
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			{/* Ternary operator: If user is signed in, show Sign Out button.
            If user is signed out show Sign In button. Checked by looking at
            currentUser received from auth function in App.js */}
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
		</div>
	</div>
);

export default Header;