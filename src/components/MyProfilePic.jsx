import React from "react";
import ProfilePic from '../../src/assets/new_pic.png';

const MyProfilePic = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img 
                src={ProfilePic} 
                // 1. REMOVED 'p-3': Padding on an <img> tag itself pushes the
                //    image content inward, away from the border.
                className="rounded-circle border border-3 profile-border-color profile-pic my-3" 
                alt="Profile" 
                // 2. ADDED STYLES: This is the fix.
                style={{
                    // A. Set a fixed width and height to ensure a perfect circle.
                    //    (You can change 250px to your preferred size).
                    width: '200px',
                    height: '200px',

                    // B. This scales the image to fill the circle without stretching it.
                    objectFit: 'cover',
                    
                    // C. This ensures the image is centered.
                    objectPosition: 'center'
                }}
            />
        </div>
    );
}

export default MyProfilePic;