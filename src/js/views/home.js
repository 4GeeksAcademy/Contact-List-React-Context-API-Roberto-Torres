import React, { useEffect } from "react";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Home = () => {

	const { store, actions } = useContext(Context)
	const contacts = store.contacts
	console.log(contacts);
	console.log(store.contacts);


	return (
		<>
			{
				contacts.map((contactInfo) => {
					return (
						<>
							<div className="text-center mt-5">
								<ContactCard contact={contactInfo} />
							</div>
						</>
					)
				})
			}
		</>
	)
};
