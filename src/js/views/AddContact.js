import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {

    const [contacto, setContacto] = useState({
        name: "",
        phone:"",
        email: "",
        address: ""
    })

    const { store, actions } = useContext(Context)

    const { id } = useParams()

    const handleClick = () => {
        if (!id) {
            PostContact()
        } else {
            actions.modifyContact(id, contacto)
        }
    }


    const handleInput = (e) => {

        setContacto({ ...contacto, [e.target.name]: e.target.value });

    }

    const PostContact = async () => {
        console.log(contacto);

        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/robertotorres/contacts',
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: contacto.name,
                        phone: contacto.phone,
                        email: contacto.email,
                        address: contacto.address,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            const data = await response.json()
        }
        catch (error) {
            alert("Error posting contact")
        }
    }

    useEffect(() => {
        if(id){
            const contactToEdit = store.contacts.find(contact => contact.id == parseInt(id))
            setContacto(contactToEdit)
        } 
    }, []);

    return (
        <>
            <form>

                <div className="form-container">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Full Name" onChange={(e) => { handleInput(e) }} value={contacto.name}></input>
                </div>
                <div className="form-container">
                    <label htmlFor="email" className="form-label text-white">Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Enter Email" onChange={(e) => { handleInput(e) }} value={contacto.email}></input>
                </div>
                <div className="form-container">
                    <label htmlFor="phone" className="form-label text-white">Phone</label>
                    <input type="text" className="form-control" name="phone" placeholder="Enter Phone" onChange={(e) => { handleInput(e) }} value={contacto.phone}></input>
                </div>
                <div className="form-container">
                    <label htmlFor="address" className="form-label text-white">Address</label>
                    <input type="text" className="form-control" name="address" placeholder="Enter Address" onChange={(e) => { handleInput(e) }} value={contacto.address}></input>
                </div>
            </form>
            <button className="submit-contact-button" onClick={handleClick}>Submit Contact</button>
            <Link to="/">
                <button className="back-home-button">Back Home</button>
            </Link>
        </>
    )
}
