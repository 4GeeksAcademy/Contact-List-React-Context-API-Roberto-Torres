import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

		const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white ms-3"><img src="https://cdn-icons-png.freepik.com/512/13337/13337614.png" style={{ width: '40px', height: 'auto' }}/><b className="brand-name" >High</b>-Tech</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="button-contact-list">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};
