import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";

export const ContactCard = ({ contact }) => {

    const { store, actions } = useContext(Context)

    console.log(contact);

    return (
        <>
            <div className="contact-card-container">
                <div className="contact-card-image">
                    <img src="https://yt3.googleusercontent.com/wpc2B6nslz9DW_pd-KZjlQ26Ds9DLVom3yeMFy87sIZcfZGe7AXVqlZUvP-ePshI7VXvqiDRpWQ=s900-c-k-c0x00ffffff-no-rj" className="contact-img" />
                </div>
                <div className="contact-card-info">
                    <div className="contact-detail">
                        <i className="fa-solid fa-user"></i><p className="p-contact-details"><b>{contact.name}</b></p>
                    </div>
                    <div className="contact-detail">
                        <i className="fa-solid fa-envelope"></i><p className="p-contact-details">{contact.email}</p>
                    </div>
                    <div className="contact-detail">
                        <i className="fa-solid fa-phone"></i><p className="p-contact-details">{contact.phone}</p>
                    </div>
                    <div className="contact-detail">
                        <i className="fa-solid fa-location-dot"></i><p className="p-contact-details">{contact.address}</p>
                    </div>
                </div>
                <div className="icons">
                    <Link to={"/editContact/" + contact.id}>
                        <span><i onClick={() => actions.modifyContact(contact.id)} className="pen-icon fa-solid fa-pen-to-square"></i></span>
                    </Link>
                    <span><i onClick={() => actions.deleteContact(contact.id)} className="remove-icon fa-solid fa-trash"></i></span>
                </div>
            </div>
        </>
    )
}