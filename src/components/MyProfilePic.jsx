import React from "react";
import { Image } from 'react-bootstrap';
import ProfilePic from '../../public/profile_pic.jpg';

const MyProfilePic = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img src={ProfilePic} className="rounded-circle border border-3 profile-border-color p-3 profile-pic my-3" />
        </div>
    );
}

export default MyProfilePic;
