import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {

    const [contacto, setContacto] = useState({})

    const {store, actions} = useContext(Context)

    const { id } = useParams()

    // const handleClick = () => {
    //     if(!id){
    //         actions.PostContact()
    //     } else {
    //     actions.modifyContact()
    //     }
    // }


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

    return (
        <>
            <form>

                <div className="form-container">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Full Name" onChange={(e) => { handleInput(e) }}></input>
                </div>
                <div className="form-container">
                    <label htmlFor="email" className="form-label text-white">Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Enter Email" onChange={(e) => { handleInput(e) }}></input>
                </div>
                <div className="form-container">
                    <label htmlFor="phone" className="form-label text-white">Phone</label>
                    <input type="text" className="form-control" name="phone" placeholder="Enter Phone" onChange={(e) => { handleInput(e) }}></input>
                </div>
                <div className="form-container">
                    <label htmlFor="address" className="form-label text-white">Address</label>
                    <input type="text" className="form-control" name="address" placeholder="Enter Address" onChange={(e) => { handleInput(e) }}></input>
                </div>
            </form>
            <button className="submit-contact-button" onClick={PostContact}>Submit Contact</button>
            <Link to="/">
                <button className="back-home-button">Back Home</button>
            </Link>
        </>
    )
}
