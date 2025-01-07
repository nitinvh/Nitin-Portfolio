import React from "react";
import ProfilePic from '../../src/assets/profilePic-.png';

const MyProfilePic = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img 
                src={ProfilePic} 
                className="rounded-circle border border-3 profile-border-color p-3 profile-pic my-3" 
                alt="Profile" 
            />
        </div>
    );
}

export default MyProfilePic;
