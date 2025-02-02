import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

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
                    <i type="button" className="modal-trigger" data-bs-toggle="modal" data-bs-target={"#modal" + contact.id}>
                        <i className="remove-icon fa-solid fa-trash"></i>
                    </i>
                </div>
                <div class="modal fade" id={"modal" + contact.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Delete Contact</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure to delete contact? - {contact.name}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}