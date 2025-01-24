import { createHashRouter } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
			],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getApi: async () => {

				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/robertotorres')
					if (!response.ok) {
						getActions().createUser()
					}
					const data = await response.json()
					console.log(data);
					setStore({ contacts: data.contacts })

				} catch (error) {
					alert("Error getting API")
				}
			},

			createUser: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/robertotorres',
						{
							method: "POST"
						}
					)
					const data = await response.json()
					console.log(data);

				} catch (error) {
					alert("Error creating alert")
				}
			},

			createContact: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/robertotorres/contacts',
						{
							method: "POST"
						}
					)
					const data = await response.json()
				} catch (error) {
					alert("Error adding contact")
				}
			},

			deleteContact: async (id) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/robertotorres/contacts/' + id,
						{
							method: "DELETE"
						}
					)
					getActions().getApi()
				} catch (error) {
					alert("Error deleting contact")
				}
			},


			modifyContact: async (id) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/robertotorres/contacts/' + id, {
						method: "PUT",
						body: JSON.stringify({
							name: "store.contacts.name",
							phone: "store.contacts.phone",
							email: "store.contacts.email",
							address: "store.contacts.address",
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
					const data = await response.json();
					console.log("hola");
					getActions().getApi();

				} catch (error) {
					alert("Error modifying task")
				}
			},

		}
	};
};

export default getState;
