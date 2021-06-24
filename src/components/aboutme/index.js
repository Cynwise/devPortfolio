import React from 'react';
import profilePhoto from '../assets/selfImage.JPG'

const aboutMe = () => {

    return(
        <div>

        <img src={profilePhoto} alt= "William Farnsworth" className = "img-thumbnail"></img>
        <h1 className="text-center">About Me</h1>
        <p>I'm a passionate person with many hobbies. I enjoy being outdoors and playing with my pets. I'm seeking a position as a Web Developer</p>

        </div>
    )
}

export default aboutMe

