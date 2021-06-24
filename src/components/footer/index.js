import React from 'react';

const Footer = () => {

    return(

        <div className="p-1 text-center bg-dark">
            <div className="p-1 text-center bg-dark">
                <a href = "https://github.com/Cynwise"><button type="button" className="btn btn-light">GitHub</button></a>
                <a href = "https://www.linkedin.com/in/williamcfarnsworth/"><button type="button" className="btn btn-light">LinkedIn</button></a>
                <a href = "mailto:williamcoreyf@gmail.com"><button type="button" className="btn btn-light">Email</button></a>
                <a href = "https://drive.google.com/file/d/19aOWWgUQCJIhXnWWOUFsr4ujc7pcfThy/view?usp=sharing"><button type="button" className="btn btn-light">Resume</button></a>
            </div>
            <p className = "mb-3 text-light">Made by William Farnsworth</p>
        </div>
    )}

export default Footer