import React from 'react';
// import employeeDirectory from '../assets/employeeDirectory.png';
// import eatsgif from '../assets/eventsEats.gif';
// import globalLostFound from '../assets/globalLostFound.png';

function Project(props) {

    return(

        // 1 cards for all the porjects
        <div className = "container vw-25 text-center" key = {props.id}>
        <div className ="card">
            <div className ="card-body">
                <h1 className ="card-title">{props.title}</h1>
                <img src={props.image} className="card-img-top w-75 h-15 " alt="Project Screenshot"/>
                {/* <img className = "bg-dark" src={props.image} alt = "Project Screenshot"></img> */}
                <p className="card-text">{props.description}</p>
                <a href={props.github} className="btn btn-primary">Github</a>
                <a href={props.deploy} className="btn btn-secondary">Deployment</a>
            </div>
        </div>
        </div>

    )
}

export default Project
